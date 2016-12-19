/*
 *
 * QuoteRequest reducer
 *
 */
import { fromJS } from 'immutable';
import {
  SET_CATEGORY,
  SET_ANSWER,
  CLEAR_ANSWERS,
  FETCH_CATEGORY,
  CATEGORY_NOT_FETCHED,
  QUOTE_REQUEST_NOT_SAVED,
} from './constants';

const initialState = fromJS({
  loadingCategory: false,
  toFetch: '',
  category: {},
  answers: {},
  place: {},
  errors: {},
});

function quoteRequestReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_CATEGORY:
      return state
        .set('loadingCategory', true)
        .set('toFetch', action.slug);

    case SET_CATEGORY:
      return state
        .set('loadingCategory', false)
        .set('category', action.category);

    case SET_ANSWER:
      return state
        .setIn(['answers', action.question], action.answer);

    case CATEGORY_NOT_FETCHED:
      return state
        .set('loadingCategory', false)
        .set('category', {});

    case CLEAR_ANSWERS:
      return state
        .set('answers', {});

    case QUOTE_REQUEST_NOT_SAVED:
      return state
        .set('errors', action.reason);

    default:
      return state;
  }
}

export default quoteRequestReducer;
