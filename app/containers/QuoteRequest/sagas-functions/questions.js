import { take, put, fork, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SET_CATEGORY } from '../constants';
import { clearAnswers } from '../actions';


/**
 * Watches for FETCH_CATEGORY actions and calls fetchRequest when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* dispatchClearAnswers() {
  yield fork(takeEvery, SET_CATEGORY, yield put(clearAnswers()));
}

/**
 * Request sage lifecycle
 */
export function* answers() {
  const watcher = yield takeEvery(SET_CATEGORY, dispatchClearAnswers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default answers;
