import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

/**
 * Direct selector to the userProvider state domain
 */
const selectIdentityDomain = () => (state) => state.user;


const makeSelectIdentity = () => createSelector(
  selectIdentityDomain(),
  (identityDomain) => identityDomain.identity
);

const makeSelectIsAuthenticated = () => createSelector(
  selectIdentityDomain(),
  (identityDomain) => isEmpty(identityDomain.loggedIn)
);

export {
  selectIdentityDomain,
  makeSelectIdentity,
  makeSelectIsAuthenticated,
};
