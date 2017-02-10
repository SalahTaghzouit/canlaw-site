/*
 *
 * QuoteRequest reducer
 *
 */
import { getState } from 'canlaw-components/utils/state-persistor';
import {
  SET_CATEGORY,
  SET_ANSWER,
  CLEAR_ANSWERS,
  FETCH_CATEGORY,
  CATEGORY_NOT_FETCHED,
  QUOTE_REQUEST_NOT_SAVED,
  SEND_QUOTE_REQUEST,
  SET_RECOVER_FROM_LOGIN,
  SET_LOCATION,
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
  recoverFromLogin: false,
  ...(getState('quoteRequest') || {}).quoteRequest,
  // We don't want to have this recovered!
  isSendingQuoteRequest: false,
  pristine: true,
};

function quoteRequestReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_CATEGORY:
      return {
        ...state,
        loadingCategory: true,
        toFetch: action.id,
      };

    case SET_CATEGORY: {
      return {
        ...state,
        loadingCategory: false,
        category: action.category || {},
        answers: {},
      };
    }

    case SET_ANSWER: {
      if (!action.question) {
        return state;
      }
      return {
        ...state,
        pristine: false,
        answers: { ...state.answers, [action.question]: action.answer },
      };
    }

    case SET_LOCATION:
      return {
        ...state,
        place: {
          lat: action.location.lat,
          lng: action.location.lng,
          address: action.location.address,
        },
        pristine: false,
      };

    case SET_RECOVER_FROM_LOGIN:
      return {
        ...state,
        recoverFromLogin: !!action.status,
        isSendingQuoteRequest: !action.status ? false : state.isSendingQuoteRequest,
      };

    case CATEGORY_NOT_FETCHED:
      return {
        ...state,
        loadingCategory: false,
        category: {},
      };

    case CLEAR_ANSWERS:
      return {
        ...state,
        answers: state.recoverFromLogin ? state.answers : {},
      };

    case QUOTE_REQUEST_NOT_SAVED:
      return {
        ...state,
        errors: action.reason,
        isSendingQuoteRequest: false,
      };

    case SEND_QUOTE_REQUEST:
      return {
        ...state,
        isSendingQuoteRequest: true,
        errors: {},
      };

    default:
      return state;
  }
}

export default quoteRequestReducer;
