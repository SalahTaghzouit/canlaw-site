import { call, put, fork, select, take, cancel } from 'redux-saga/effects';
import { identityLoaded, userNotLoggedIn } from './actions';
import { showLoading, hideLoading } from '../App/actions';
import { makeSelectIdentity } from './selectors';
import env from '../../utils/env';
import request from '../../utils/request';
import { REQUEST_IDENTITY, USER_NOT_LOGGED_IN, USER_LOGGED_OUT } from './constants';

// Individual exports for testing
export function* getIdentity() {
  try {
    // We'll see if an identity is already there
    let id = yield select(makeSelectIdentity());

    if (!id) {
      const requestURL = `${env.appUrl}/identity`;
      yield put(showLoading());
      // Call our request helper (see 'utils/request')
      id = yield call(request, requestURL);
    }

    yield put(identityLoaded(id));
  } catch (err) {
    yield put(userNotLoggedIn(err));
  } finally {
    yield put(hideLoading());
  }
}


export function* loginFlow() {
  const loginFlowEnabled = true;

  while (loginFlowEnabled) {
    yield take(REQUEST_IDENTITY);

    // fork return a Task object
    const task = yield fork(getIdentity);

    const action = yield take([USER_NOT_LOGGED_IN, USER_LOGGED_OUT]);

    if (action.type === USER_LOGGED_OUT) {
      yield cancel(task);
    }
  }
}

// All sagas to be loaded
export default [
  loginFlow,
];
