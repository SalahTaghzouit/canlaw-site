const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const resolve = require('path').resolve;
const logger = require('./logger');
const setup = require('./middlewares/frontendMiddleware');
const setupSession = require('./middlewares/sessionMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

const app = express();
const router = express.Router(); // eslint-disable-line new-cap

// Session
setupSession(app);

// Prefix
app.use(process.env.PREFIX_PATH || '/', router);

// In production we need to pass these values in instead of relying on webpack
setup(app, router, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: process.env.PUBLIC_ASSETS_PATH || '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    logger.error(err.message);
    return;
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        logger.error(innerErr);
        return;
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
