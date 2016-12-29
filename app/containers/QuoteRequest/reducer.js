/*
 *
 * QuoteRequest reducer
 *
 */
import {
  SET_CATEGORY,
  SET_ANSWER,
  CLEAR_ANSWERS,
  FETCH_CATEGORY,
  CATEGORY_NOT_FETCHED,
  QUOTE_REQUEST_NOT_SAVED,
  SEND_QUOTE_REQUEST,
} from './constants';

const initialState = {
  loadingCategory: false,
  toFetch: '',
  category: {},
  answers: {},
  place: {},
  errors: {},
  categoryCache: {},
  current_page: 0,
  from: 1,
  last_page: 0,
  per_page: 15,
  total: 0,
};

function quoteRequestReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_CATEGORY:
      return {
        ...state,
        loadingCategory: true,
        toFetch: action.id,
      };

    case SET_CATEGORY:
      return {
        ...state,
        loadingCategory: false,
        category: action.category || {},
      };

    case SET_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, [action.question]: action.answer },
      };

    case CATEGORY_NOT_FETCHED:
      return {
        ...state,
        loadingCategory: false,
        category: {},
      };

    case CLEAR_ANSWERS:
      return { ...state, answers: {} };

    case QUOTE_REQUEST_NOT_SAVED:
      return { ...state, errors: action.reason };

    case SEND_QUOTE_REQUEST:
      return { ...state, errors: {} };

    default:
      return state;
  }
}

export default quoteRequestReducer;
