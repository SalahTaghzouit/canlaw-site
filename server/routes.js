const proxy = require('express-request-proxy');
const querystring = require('querystring');
const axios = require('axios');
const moment = require('moment');
const bodyParser = require('body-parser');

module.exports = (router) => {
  const authHost = process.env.AUTH_HOST || process.env.AUTH_URL;

  // Proxy to api
  router.all('/api/*', (req, res, next) => {
    const runProxy = proxy({
      url: `${process.env.API_URL}/*`,
      headers: {
        Authorization: `${req.session.tokenType} ${req.session.accessToken}`,
      },
    });

    runProxy(req, res, next);
  });

  // Parser
  router.use(bodyParser.json()); // for parsing application/json
  router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


  router.get('/auth', (req, res) => {
    const request = req;

    if (req.query.redirect) {
      request.session.intedendAfterLogin = req.query.redirect;
    }

    if (req.query.type === 'register') {
      return res.redirect(`${process.env.REGISTER_URL}?role=client`);
    }

    const redirect = `${process.env.APP_URL}/auth/callback`;

    const query = querystring.stringify({
      client_id: process.env.CLIENT_ID,
      redirect_uri: redirect,
      response_type: 'code',
      scope: '',
    });

    const url = `${process.env.AUTH_URL}/oauth/authorize?${query}`;

    return res.redirect(url);
  });

  router.get('/auth/callback', (req, res) => {
    const request = req;
    request.session = request.session || {};
    const redirect = request.session.intedendAfterLogin || process.env.APP_URL;

    axios.post(`${authHost}/oauth/token`, {
      grant_type: 'authorization_code',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      // This doesn't really mean a redirect, it's just an additional verification in the flow
      redirect_uri: `${process.env.APP_URL}/auth/callback`,
      code: req.query.code,
    }).then((response) => {
      request.session.tokenType = response.data.token_type;
      request.session.accessToken = response.data.access_token;
      request.session.refreshToken = response.data.refresh_token;
      request.session.expiresAt = moment().add(response.data.expires_in, 'seconds');
      res.redirect(redirect);
    }).catch((error) => {
      console.log(error);
      const query = querystring.stringify({
        redirect,
        error,
      });
      res.redirect(`/auth?${query}`);
    });
  });

  router.get('/identity', (req, res) => {
    const request = req;
    request.session = request.session || {};
    axios.get(`${authHost}/identity`, {
      headers: {
        Authorization: `${request.session.tokenType} ${request.session.accessToken}`,
      },
    }).then((response) => {
      res.status(response.status).json(response.data);
    }).catch((error) => {
      const status = error.response ? error.response.status : 500;
      res.status(status).json(error.response.data);
    });
  });

  router.delete('/auth/logout', (req, res) => {
    req.session.destroy();
    return res.status(200).json(`${process.env.AUTH_URL}/logout`);
  });
};
