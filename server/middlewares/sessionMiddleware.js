const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const env = require('../../localEnv');

/**
 * Session middleware
 */
module.exports = (app) => {
  const secureCookie = env.secureCookie;

  // Sessions
  app.use(session({
    store: new RedisStore({
      host: env.redisHost,
      port: env.redisPort,
    }),
    secret: env.cookieSecret,
    resave: false,
    saveUninitialized: false,
    name: 'canlaw_site',
    cookie: {
      domain: env.cookieDomain,
      path: env.cookiePath || '/',
      secure: secureCookie,
      httpOnly: false,
      maxAge: 31536000, // 1 year
    },
  }));

  return app;
};
