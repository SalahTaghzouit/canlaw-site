import { take, fork, cancel, select, call, takeLatest, put } from 'redux-saga/lib/effects';
import { LOCATION_CHANGE } from 'react-router-redux/lib/reducer';
import isEmpty from 'lodash/isEmpty';
import env from 'canlaw-components/utils/env';
import request from 'canlaw-components/utils/request';
import { LOAD_QUESTIONS_TRANSLATIONS } from '../constants';
import { makeSelectQuestionsToTranslate } from '../selectors';
import { loadedQuestionsTranslations } from '../actions';

export function* loadQuestionsTranslations() {
  const questions = yield select(makeSelectQuestionsToTranslate());
  if (isEmpty(questions)) {
    yield put(loadedQuestionsTranslations({}));
    return;
  }

  try {
    const requestURL = `${env.apiUrl}/get-translations?messages=${questions.join(',')}`;
    const translated = yield call(request, requestURL);
    yield put(loadedQuestionsTranslations(translated));
  } catch (err) {
    console.error(err);
    yield put(loadedQuestionsTranslations({}));
  }
}

/**
 * Watches for LOAD_QUESTIONS_TRANSLATIONS actions and calls loadQuestionsTranslations when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getWatcher() {
  yield fork(takeLatest, LOAD_QUESTIONS_TRANSLATIONS, loadQuestionsTranslations);
}

/**
 * Request sage lifecycle
 */
export function* loadQuestionsTranslationsSaga() {
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default loadQuestionsTranslationsSaga;
