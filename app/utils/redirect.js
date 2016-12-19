export default (url, redirectBackHere = false) => {
  let redirect = '';
  if (redirectBackHere) {
    redirect = `redirect=${typeof redirectBackHere === 'boolean' ? window.location.href : redirectBackHere}`;
  }
  window.location.assign(`${url}${redirect ? `?${redirect}` : ''}`);
};
