import { call, put, fork, select, take, cancel } from 'redux-saga/lib/effects';
import isEmpty from 'lodash/isEmpty';
import { identityLoaded, userNotLoggedIn } from 'canlaw-components/containers/UserProvider/actions';
import { makeSelectIdentity } from 'canlaw-components/containers/UserProvider/selectors';
import env from 'canlaw-components/utils/env';
import request from 'canlaw-components/utils/request';
import redirect from 'canlaw-components/utils/redirect';
import {
  REQUEST_IDENTITY,
  USER_NOT_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGOUT,
} from 'canlaw-components/containers/UserProvider/constants';

// Individual exports for testing
export function* getIdentity() {
  try {
    // We'll see if an identity is already there
    let id = yield select(makeSelectIdentity());

    if (isEmpty(id)) {
      const requestURL = `${env.appUrl}/identity`;
      // Call our request helper (see 'utils/request')
      id = yield call(request, requestURL);
    }

    yield put(identityLoaded(id));
  } catch (err) {
    yield put(userNotLoggedIn(err));
  }
}

export function* logout() {
  try {
    const requestURL = `${env.appUrl}/auth/logout`;
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL, {
      method: 'DELETE',
    });
    yield put(userNotLoggedIn(USER_LOGGED_OUT));

    return result;
  } catch (err) {
    yield put(userNotLoggedIn(err));
  }
  return null;
}


export function* loginFlow() {
  const loginFlowEnabled = true;

  while (loginFlowEnabled) {
    yield take(REQUEST_IDENTITY);

    // fork return a Task object
    const task = yield fork(getIdentity);

    const action = yield take([USER_NOT_LOGGED_IN, USER_LOGGED_OUT, LOGOUT]);

    if (action.type === USER_LOGGED_OUT) {
      yield cancel(task);
    }

    if (action.type === LOGOUT) {
      const redirectUrl = yield call(logout);
      if (!action.soft) {
        yield call(redirect.bind(null, redirectUrl));
      }
      return;
    }

    // yield put(redirectingToAuth());
    // yield call(redirectToAuth);
  }
}

// All sagas to be loaded
export default [
  loginFlow,
];
