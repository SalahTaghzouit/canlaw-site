import expect from 'expect';
import userProviderReducer from '../reducer';

describe('userProviderReducer', () => {
  it('returns the initial state', () => {
    expect(userProviderReducer(undefined, {})).toEqual({});
  });
});
