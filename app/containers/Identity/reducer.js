/*
 *
 * Identity reducer
 *
 */
import { REQUEST_IDENTITY, IDENTITY_LOADED, USER_NOT_LOGGED_IN } from './constants';

const initialState = {
  identity: {},
  loggingIn: false,
  loggedIn: false,
};

function userProviderReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IDENTITY:
      return { ...state, loggingIn: true };

    case IDENTITY_LOADED:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        identity: action.identity,
      };

    case USER_NOT_LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
      };

    default:
      return state;
  }
}

export default userProviderReducer;
