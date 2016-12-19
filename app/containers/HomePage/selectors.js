import { createSelector } from 'reselect';

/**
 * Direct selector to the userProvider state domain
 */
const selectHomeDomain = () => (state) => state.get('home');


const makeSelectCategory = () => createSelector(
  selectHomeDomain(),
  (homeDomain) => homeDomain.get('category').toJS()
);

export {
  selectHomeDomain,
  makeSelectCategory,
};
