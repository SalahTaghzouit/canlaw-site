import { createSelector } from 'reselect';

/**
 * Direct selector to the userProvider state domain
 */
const selectCategoryDomain = () => (state) => state.get('category');


const makeSelectCategory = () => createSelector(
  selectCategoryDomain(),
  (identityDomain) => identityDomain.get('data')
);

export {
  selectCategoryDomain,
  makeSelectCategory,
};
