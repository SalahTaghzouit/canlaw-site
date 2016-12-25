const session = require('express-session');
const RedisStore = require('connect-redis')(session);

/**
 * Session middleware
 */
module.exports = (app) => {
  const secureCookie = typeof process.env.SECURE_COOKIE === 'boolean' ?
    process.env.SECURE_COOKIE :
    process.env.SECURE_COOKIE === 'true';

  // Sessions
  app.use(session({
    store: new RedisStore({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'canlaw_site',
    cookie: {
      domain: process.env.COOKIE_DOMAINE,
      path: process.env.COOKIE_PATH || '/',
      secure: secureCookie,
      httpOnly: false,
      maxAge: 31536000, // 1 year
    },
  }));

  return app;
};
