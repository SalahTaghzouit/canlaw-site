import { clearCategory, startQuoteRequest } from '../actions';
import { CLEAR_CATEGORY, START_QUOTE_REQUEST } from '../constants';

describe('HomePage actions', () => {
  // done by Julius
  describe('Start Quote Request', () => {
    it('should give me a START_QUOTE_REQUEST and a category', () => {
      const expected = {
        type: START_QUOTE_REQUEST,
        category: 1,
      };

      expect(startQuoteRequest(1)).toEqual(expected);
    });
  });

  // done by Julius
  describe('Clear Category', () => {
    it('should give me a CLEAR_CATEGORY', () => {
      const expected = {
        type: CLEAR_CATEGORY,
      };

      expect(clearCategory()).toEqual(expected);
    });
  });
});
