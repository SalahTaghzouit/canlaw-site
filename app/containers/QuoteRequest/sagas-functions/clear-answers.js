import { take, fork, cancel, put } from 'redux-saga/lib/effects';
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer';
import { takeEvery } from 'redux-saga';
import { SET_CATEGORY } from '../constants';
import { clearAnswers } from '../actions';

function* dispatchClearAnswers() {
  yield put(clearAnswers());
}

/**
 * Watches for every SET_CATEGORY, then clears the answers
 */
export function* answers() {
  const watcher = yield fork(takeEvery, SET_CATEGORY, dispatchClearAnswers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default answers;
