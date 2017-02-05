const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
const resolve = require('path').resolve;
const logger = require('./logger');
const setup = require('./middlewares/frontendMiddleware');
const setupSession = require('./middlewares/sessionMiddleware');
const env = require('../localEnv');

const isDev = env.nodeEnv !== 'production';
const ngrok = (isDev && env.enableTunnel) || argv.tunnel ? require('ngrok') : false;

const app = express();
const router = express.Router(); // eslint-disable-line new-cap

// Session
setupSession(app);

// Prefix
app.use(`${env.baseUrlPath}/`, router);

// In production we need to pass these values in instead of relying on webpack
setup(app, router, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: `${env.baseUrlPath}/`,
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || env.host;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || env.port || 3000;

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
