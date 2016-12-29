import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { makeSelectSavableQuoteRequest } from '../selectors';
import { SEND_QUOTE_REQUEST } from '../constants';
import { quoteRequestNotSaved } from '../actions';
import env from '../../../utils/env';
import request from '../../../utils/request';
import redirect from '../../../utils/redirect';
import { saveState } from '../../../utils/state-persistor';
import { getStore } from '../../../store';

export function redirectToDashboard() {
  redirect(`${env.dashboardUrl}/requests`);
}


export function redirectToAuth() {
  redirect(env.authUrl, true);
}

/**
 * Request request/response handler
 */
export function* sendQuoteRequest() {
  console.log('Sending quote request');
  const quoteRequest = yield select(makeSelectSavableQuoteRequest());
  console.log(quoteRequest);
  // Call our request helper (see 'utils/request')
  const requestURL = `${env.apiUrl}/quote-request`;
  try {
    // Clear state from storage
    saveState({ quoteRequest: undefined });
    yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(quoteRequest),
    });

    yield call(redirectToDashboard);
  } catch (err) {
    console.log(err);
    if (err.response.status === 401) {
      saveState({
        quoteRequest: {
          ...getStore().getState().quoteRequest,
          save: true,
        },
      });
      yield call(redirectToAuth);
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
