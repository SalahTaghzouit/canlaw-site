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
  isSendingQuoteRequest: false,
  ...getState('quoteRequest').quoteRequest,
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
        answers: state.category.id === action.category.id ?
          state.answers :
          ((questions) => {
            const answers = {};
            questions.forEach((question) => {
              answers[question.name] = '';
            });

            return answers;
          })(action.category.questions),
      };
    }

    case SET_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, [action.question]: action.answer },
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
