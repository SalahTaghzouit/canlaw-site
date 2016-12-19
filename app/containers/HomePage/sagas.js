import { take, put, fork, cancel, select } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { clearCategory } from './actions';
import { START_QUOTE_REQUEST } from './constants';
import { makeSelectCategory } from './selectors';
import { setCategory } from '../QuoteRequest/actions';


/**
 * RequestShow request/response handler
 */
export function* goToQuoteRequest() {
  const category = yield select(makeSelectCategory());

  yield put(clearCategory());
  yield put(setCategory(category));
  yield put(push('/quote-request'));
}

/**
 * Watches for FETCH_REQUEST actions and calls fetchRequests when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* startQuoteRequestWatcher() {
  yield fork(takeLatest, START_QUOTE_REQUEST, goToQuoteRequest);
}

/**
 * RequestShow sage lifecycle
 */
export function* startQuoteRequest() {
  const watcher = yield fork(startQuoteRequestWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  startQuoteRequest,
];
