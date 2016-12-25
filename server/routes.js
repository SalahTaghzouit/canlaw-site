const proxy = require('express-request-proxy');
const querystring = require('querystring');
const axios = require('axios');
const moment = require('moment');

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

  router.get('/auth', (req, res) => {
    const request = req;

    if (req.params.redirect) {
      request.session.intedendAfterLogin = req.params.redirect;
    }
    console.log('######################### AUTH');
    console.log(request.session);

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
      console.log('######################### CALLBACK');

      console.log(request.session);

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
    console.log('######################### IDENTITY');
    console.log(request.session);
    axios.get(`${authHost}/identity`, {
      headers: {
        Authorization: `${request.session.tokenType} ${request.session.accessToken}`,
      },
    }).then((response) => {
      console.log(response);
      res.status(response.status).json(response.data);
    }).catch((error) => {
      console.log(error);
      const status = error.response ? error.response.status : 500;
      res.status(status).json(error.data);
    });
  });
};
