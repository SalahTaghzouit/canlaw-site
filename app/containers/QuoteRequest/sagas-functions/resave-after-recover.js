import { take, fork, cancel, takeEvery, select } from 'redux-saga/lib/effects';
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer';
import { saveState } from 'canlaw-components/utils/state-persistor';
import { SET_RECOVER_FROM_LOGIN } from '../constants';
import { selectQuoteRequestDomain } from '../selectors';

export function* resaveAfterRecover() {
  const quoteRequestDomain = yield select(selectQuoteRequestDomain());
  saveState('quoteRequest', {
    quoteRequest: {
      ...quoteRequestDomain,
      isSendingQuoteRequest: false,
    },
  });
}

/**
 * Watches for SET_RECOVER_FROM_LOGIN actions and calls resaveAfterRecover when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getWatcher() {
  yield fork(takeEvery, SET_RECOVER_FROM_LOGIN, resaveAfterRecover);
}

/**
 * Request sage lifecycle
 */
export function* resaveAfterRecoverSaga() {
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default resaveAfterRecoverSaga;
