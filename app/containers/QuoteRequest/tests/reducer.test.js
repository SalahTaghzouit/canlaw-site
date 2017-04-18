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
} from '../constants';
import quoteRequestReducer from '../reducer';

let initialState;
describe('quoteRequestReducer', () => {
  beforeEach(() => {
    initialState = {
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
  });

  it('returns the initial state', () => {
    expect(quoteRequestReducer(undefined, {})).toEqual(initialState);
  });

  it('should put isFetchingCategory to true', () => {
    const action = {
      type: FETCH_CATEGORY,
      id: 1,
    };
    const expectedState = {
      ...initialState,
      isFetchingCategory: true,
      toFetch: 1,
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });
  // CACHE_CATEGORY has no reducer

  it('should put isFetchingCategory to false and return an empty category', () => {
    const action = {
      type: CATEGORY_NOT_FETCHED,
      reason: 1,
    };
    const expectedState = {
      ...initialState,
      isFetchingCategory: false,
      category: {},
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should put isFetchingCategory to false and return a category and empty answers', () => {
    const category = { hello: 'world' };
    const action = {
      type: SET_CATEGORY,
      category,
    };
    const expectedState = {
      ...initialState,
      isFetchingCategory: false,
      category: action.category || {},
      answers: {},
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should put pristine to false and return answers', () => {
    const question = { hello: 'world' };
    const answer = { what: 'is wrong?' };
    const order = 1;
    const action = {
      type: SET_ANSWER,
      question,
      answer,
      order,
    };
    const expectedState = {
      ...initialState,
      pristine: false,
      answers: {
        ...initialState.answers,
        [action.question]: { answer: action.answer, order: action.order },
      },
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should put isSendingQuoteRequest to true and return empty errors', () => {
    const action = {
      type: SEND_QUOTE_REQUEST,
    };
    const expectedState = {
      ...initialState,
      isSendingQuoteRequest: true,
      errors: {},
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should give answers', () => {
    const action = {
      type: CLEAR_ANSWERS,
    };
    const expectedState = {
      ...initialState,
      answers: initialState.recoverFromLogin ? initialState.answers : {},

    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should put isSendingQuoteRequest to false and give errors', () => {
    const action = {
      type: QUOTE_REQUEST_NOT_SAVED,
      reason: 1,
    };
    const expectedState = {
      ...initialState,
      errors: 1,
      isSendingQuoteRequest: false,
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });

  it('should put pristine to false and give coordinates of a place', () => {
    const action = {
      type: SET_LOCATION,
      location: 1,
    };
    const expectedState = {
      ...initialState,
      place: {
        lat: action.location.lat,
        lng: action.location.lng,
        address: action.location.address,
      },
      pristine: false,
    };
    expect(quoteRequestReducer(initialState, action)).toEqual(expectedState);
  });
});
