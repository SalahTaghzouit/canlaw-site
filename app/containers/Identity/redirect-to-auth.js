import env from '../../utils/env';

export default (type = 'auth', redirect = window.location.href) => {
  if (type !== 'auth' && type !== 'register') {
    throw new Error('Unauthorized url for auth');
  }

  window.location.assign(`${env.appUrl}/${type}?redirect=${redirect}`);
};
