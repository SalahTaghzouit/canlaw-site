import { createSelector } from 'reselect';

/**
 * Direct selector to the userProvider state domain
 */
const selectHomeDomain = () => (state) => state.home;


const makeSelectCategory = () => createSelector(
  selectHomeDomain(),
  (homeDomain) => homeDomain.category
);

export {
  selectHomeDomain,
  makeSelectCategory,
};
