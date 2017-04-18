import {
  cacheCategory,
  categoryNotFetched,
  clearAnswers,
  fetchCategory,
  quoteRequestNotSaved,
  sendQuoteRequest,
  setAnswer,
  setCategory,
  setLocation,
} from '../actions';
import {
  CACHE_CATEGORY,
  CATEGORY_NOT_FETCHED,
  CLEAR_ANSWERS,
  FETCH_CATEGORY,
  QUOTE_REQUEST_NOT_SAVED,
  SEND_QUOTE_REQUEST,
  SET_ANSWER,
  SET_CATEGORY,
  SET_LOCATION,
} from '../constants';

describe('QuoteRequest actions', () => {
  describe('FETCH_CATEGORY', () => {
    it('has a type of FETCH_CATEGORY', () => {
      const expected = {
        type: FETCH_CATEGORY,
        id: 1,
      };
      expect(fetchCategory(1)).toEqual(expected);
    });
  });

  describe('CACHE_CATEGORY', () => {
    it('has a type of CACHE_CATEGORY', () => {
      const expected = {
        type: CACHE_CATEGORY,
        id: 1,
      };
      expect(cacheCategory(1)).toEqual(expected);
    });
  });

  describe('CATEGORY_NOT_FETCHED', () => {
    it('has a type of CATEGORY_NOT_FETCHED', () => {
      const expected = {
        type: CATEGORY_NOT_FETCHED,
        reason: 1,
      };
      expect(categoryNotFetched(1)).toEqual(expected);
    });
  });

  describe('SET_CATEGORY', () => {
    it('has a type of SET_CATEGORY', () => {
      const expected = {
        type: SET_CATEGORY,
        category: 1,
      };
      expect(setCategory(1)).toEqual(expected);
    });
  });

  describe('SET_ANSWER', () => {
    it('has a type of SET_ANSWER', () => {
      const expected = {
        type: SET_ANSWER,
        question: 1,
        answer: 2,
        order: 3,
      };
      expect(setAnswer(1, 2, 3)).toEqual(expected);
    });
  });

  describe('SEND_QUOTE_REQUEST', () => {
    it('has a type of SEND_QUOTE_REQUEST', () => {
      const expected = {
        type: SEND_QUOTE_REQUEST,
      };
      expect(sendQuoteRequest()).toEqual(expected);
    });
  });

  describe('CLEAR_ANSWERS', () => {
    it('has a type of CLEAR_ANSWERS', () => {
      const expected = {
        type: CLEAR_ANSWERS,
      };
      expect(clearAnswers()).toEqual(expected);
    });
  });

  describe('QUOTE_REQUEST_NOT_SAVED', () => {
    it('has a type of QUOTE_REQUEST_NOT_SAVED', () => {
      const expected = {
        type: QUOTE_REQUEST_NOT_SAVED,
        reason: 1,
      };
      expect(quoteRequestNotSaved(1)).toEqual(expected);
    });
  });

  describe('SET_LOCATION', () => {
    it('has a type of SET_LOCATION', () => {
      const expected = {
        type: SET_LOCATION,
        location: 1,
      };
      expect(setLocation(1)).toEqual(expected);
    });
  });
});
