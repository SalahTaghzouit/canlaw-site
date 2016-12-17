/*
 *
 * Identity reducer
 *
 */
import { fromJS } from 'immutable';
import { REQUEST_IDENTITY, IDENTITY_LOADED, USER_NOT_LOGGED_IN } from './constants';

const initialState = fromJS({
  identity: {},
  loggingIn: false,
  loggedIn: false,
});

function userProviderReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IDENTITY:
      return state
        .set('loggingIn', true);

    case IDENTITY_LOADED:
      return state
        .set('loggingIn', false)
        .set('loggedIn', true)
        .set('identity', action.identity);

    case USER_NOT_LOGGED_IN:
      return state
        .set('loggingIn', false)
        .set('loggedIn', false);

    default:
      return state;
  }
}

export default userProviderReducer;
