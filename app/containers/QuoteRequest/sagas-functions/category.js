import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { categoryNotFetched, cacheCategory, setCategory } from '../actions';
import env from '../../../utils/env';
import request from '../../../utils/request';
import { FETCH_CATEGORY } from '../constants';
import { makeSelectCategorySlug, selectCategoryFromCache } from '../selectors';

/**
 * Category request/response handler
 */
export function* fetchCategory() {
  // Find the request first in the requests list
  const slug = yield select(makeSelectCategorySlug());
  const cachedCategory = yield select(selectCategoryFromCache(slug));

  if (cachedCategory) {
    yield put(setCategory(cachedCategory));
    return;
  }

  // Call our request helper (see 'utils/request')
  const requestURL = `${env.apiUrl}/category/${slug}`;
  try {
    const cat = yield call(request, requestURL);
    yield put(setCategory(cat));
    // Push it to the cache
    yield put(cacheCategory(cat));
  } catch (err) {
    yield put(categoryNotFetched(err));
  }
}

/**
 * Watches for FETCH_CATEGORY actions and calls fetchRequest when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getRequestWatcher() {
  yield fork(takeLatest, FETCH_CATEGORY, fetchCategory);
}

/**
 * Request sage lifecycle
 */
export function* category() {
  const watcher = getRequestWatcher();

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default category;
