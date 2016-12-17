/*
 *
 * Identity actions
 *
 */
import { REQUEST_IDENTITY, IDENTITY_LOADED, USER_NOT_LOGGED_IN } from './constants';

export function requestIdentity() {
  return {
    type: REQUEST_IDENTITY,
  };
}

export function identityLoaded(identity) {
  return {
    type: IDENTITY_LOADED,
    identity,
  };
}

export function userNotLoggedIn(err) {
  return {
    type: USER_NOT_LOGGED_IN,
    error: err,
  };
}
