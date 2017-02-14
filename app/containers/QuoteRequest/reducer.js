/*
 *
 * QuoteRequest reducer
 *
 */
import { getState } from 'canlaw-components/utils/state-persistor';
import {
  CATEGORY_NOT_FETCHED,
  CLEAR_ANSWERS,
  FETCH_CATEGORY,
  QUOTE_REQUEST_NOT_SAVED,
  SEND_QUOTE_REQUEST,
  SET_ANSWER,
  SET_CATEGORY,
  SET_LOCATION,
  SET_RECOVER_FROM_LOGIN,
} from './constants';

const initialState = {
  isFetchingCategory: false,
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
        isFetchingCategory: true,
        toFetch: action.id,
      };

    case SET_CATEGORY: {
      return {
        ...state,
        isFetchingCategory: false,
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
        answers: {
          ...state.answers,
          [action.question]: { answer: action.answer, order: action.order },
        },
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
        isFetchingCategory: false,
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
