
import quoteRequestReducer from '../reducer';

describe('quoteRequestReducer', () => {
  it('returns the initial state', () => {
    expect(quoteRequestReducer(undefined, {})).toEqual({});
  });
});
