import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { makeSelectSavableQuoteRequest } from '../selectors';
import { SEND_QUOTE_REQUEST } from '../constants';
import { quoteRequestNotSaved } from '../actions';
import env from '../../../utils/env';
import request from '../../../utils/request';
import redirect from '../../../utils/redirect';

export function redirectToDashboard() {
  redirect(env.dashboardUrl);
}


export function redirectToAuth() {
  redirect(env.registerUrl, true);
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
    yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(quoteRequest),
    });

    yield call(redirectToDashboard);
  } catch (err) {
    if (err.status === 401) {
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
  console.log('Registring watcher');
  yield fork(takeLatest, SEND_QUOTE_REQUEST, sendQuoteRequest);
}

export function* quoteRequestSave() {
  console.log('Starting');
  const watcher = yield fork(getSendWatcher);
  console.log('Watcher registered');
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default quoteRequestSave;
