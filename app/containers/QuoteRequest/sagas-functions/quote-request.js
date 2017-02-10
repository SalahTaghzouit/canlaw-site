import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { saveState } from 'canlaw-components/utils/state-persistor';
import env from 'canlaw-components/utils/env';
import request from 'canlaw-components/utils/request';
import redirect from 'canlaw-components/utils/redirect';
import { WRONG_ACCOUNT_TYPE } from 'canlaw-components/containers/UserProvider/constants';
import { makeSelectSavableQuoteRequest, selectQuoteRequestDomain } from '../selectors';
import { SEND_QUOTE_REQUEST } from '../constants';
import { quoteRequestNotSaved, logout } from '../actions';

export function redirectToDashboard(quoteRequestId) {
  redirect(`${env.dashboardUrl}/requests?quote_request_sent=${quoteRequestId}`);
}


export function redirectToAuth() {
  console.log(`Redirecting to: ${env.authUrl}?type=register`);
  redirect(`${env.authUrl}?type=register&forceLogin=1`, `${window.location.href}?autosubmit=1`);
}

/**
 * Request request/response handler
 */
export function* sendQuoteRequest() {
  const quoteRequest = yield select(makeSelectSavableQuoteRequest());

  // Call our request helper (see 'utils/request')
  const requestURL = `${env.apiUrl}/quote-request`;
  try {
    const newQuoteRequest = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(quoteRequest),
    });

    // Clear state from storage
    saveState('quoteRequest', { quoteRequest: {} });

    yield call(redirectToDashboard.bind(null, newQuoteRequest.id));
  } catch (err) {
    if (err.response.status === 401) {
      const quoteRequestDomain = yield select(selectQuoteRequestDomain());
      saveState('quoteRequest', {
        quoteRequest: {
          ...quoteRequestDomain,
          recoverFromLogin: true,
        },
      });
      yield call(redirectToAuth);
    } else if (err.response.status === 403) {
      yield put(logout(WRONG_ACCOUNT_TYPE, true));
      yield call(sendQuoteRequest);
    } else {
      yield put(quoteRequestNotSaved(err));
    }
  }
}

/**
 * Watches for SEND_QUOTE_REQUEST actions and calls fetchRequest when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getSendWatcher() {
  yield fork(takeLatest, SEND_QUOTE_REQUEST, sendQuoteRequest);
}

export function* quoteRequestSave() {
  const watcher = yield fork(getSendWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default quoteRequestSave;
