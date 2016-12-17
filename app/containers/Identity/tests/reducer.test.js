import expect from 'expect';
import userProviderReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userProviderReducer', () => {
  it('returns the initial state', () => {
    expect(userProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
