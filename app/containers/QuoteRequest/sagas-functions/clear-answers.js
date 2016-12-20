import { put, fork } from 'redux-saga/effects';
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
  yield fork(takeEvery, SET_CATEGORY, dispatchClearAnswers);
}

export default answers;
