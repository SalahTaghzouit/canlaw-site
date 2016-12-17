import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

/**
 * Direct selector to the userProvider state domain
 */
const selectIdentityDomain = () => (state) => state.get('user');


const makeSelectIdentity = () => createSelector(
  selectIdentityDomain(),
  (identityDomain) => identityDomain.get('identity')
);

const makeSelectIsAuthenticated = () => createSelector(
  selectIdentityDomain(),
  (identityDomain) => isEmpty(identityDomain.get('loggedIn'))
);

export {
  selectIdentityDomain,
  makeSelectIdentity,
  makeSelectIsAuthenticated,
};
