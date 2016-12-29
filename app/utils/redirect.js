import isInteger from 'lodash/isInteger';
import has from 'lodash/has';
import env from './env';

export default function redirect(url, redirectBackHere = false) {
  console.log('url is :');
  console.log(url);
  if (typeof url !== 'string') {
    throw new Error('No url to redirect to');
  }

  let redirectQuery = '';
  let prefix = '?';
  console.log(window.location.href);
  console.log('THAT WAS CURRENT HREF');
  if (redirectBackHere) {
    redirectQuery = `redirect=${typeof redirectBackHere === 'boolean' ? window.location.href : redirectBackHere}`;
    if (url.indexOf('?') > -1) {
      prefix = '&';
    }
  }
  console.log('redirecting to:');
  console.log(`${url}${redirectQuery ? `${prefix}${redirectQuery}` : ''}`);
  window.location.assign(`${url}${redirectQuery ? `${prefix}${redirectQuery}` : ''}`);
}

/**
 * Redirect to auth if there's an unauthorized status in error
 *
 * @param err
 * @param redirectBackHere
 */
export function redirectToAuthIfUnauth(err, redirectBackHere = true) {
  let status;

  if (isInteger(err)) {
    status = err;
  }

  if (typeof err === 'object') {
    if (has(err, 'status')) {
      status = err.status;
    } else if (has(err, 'response')) {
      status = err.response.status;
    }
  }

  if (status === 401 || status === 400) {
    redirect(`${env.appUrl}/auth`, redirectBackHere);
  }
}
