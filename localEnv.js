module.exports = {
  // General
  websiteUrl: process.env.WEBSITE_URL, // http://site.com
  authUrl: process.env.AUTH_URL, // http://site.com/auth
  apiUrl: process.env.API_URL, // http://site.com/api
  appUrl: process.env.LOCAL_APP_URL, // http://local.com/
  cdnUrl: (process.env.CDN_URL || '').replace(/\/$/, ''), // PUBLIC_ASSETS_PATH
  baseUrlPath: (process.env.BASE_URL_PATH || '').replace(/\/$/, ''), // PREFIX_PATH
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,

  // Others
  nodeEnv: process.env.NODE_ENV,
  enableTunnel: typeof process.env.ENABLE_TUNNEL === 'boolean' ? process.env.ENABLE_TUNNEL : process.env.ENABLE_TUNNEL === 'true',
  host: process.env.HOST,
  port: process.env.PORT,

  secureCookie: typeof process.env.SECURE_COOKIE === 'boolean' ? process.env.SECURE_COOKIE : process.env.SECURE_COOKIE === 'true',
  cookieSecret: process.env.COOKIE_SECRET,
  cookieDomain: process.env.COOKIE_DOMAIN,
  cookiePath: process.env.COOKIE_PATH,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,

  // Specific
  blogUrl: process.env.BLOG_URL,
  dashboardUrl: process.env.DASHBOARD_URL,
  loginUrl: process.env.LOGIN_URL,
  registerUrl: process.env.REGISTER_URL,
  algoliaCategoryIndex: process.env.ALGOLIA_CATEGORY_INDEX,
  algoliaAppId: process.env.ALGOLIA_APP_ID,
  algoliaApiKey: process.env.ALGOLIA_API_KEY,
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
};
