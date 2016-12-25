
import quoteRequestReducer from '../reducer';

describe('homeReducer', () => {
  it('returns the initial state', () => {
    expect(quoteRequestReducer(undefined, {})).toEqual({});
  });
});
