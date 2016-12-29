/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import isEqual from 'lodash/isEqual';

const makeSelectGlobal = () => (state) => state.global;

const makeSelectLocationState = () => {
  let prevRoutingState;

  return (state) => {
    const routingState = state.routing;

    if (!isEqual(routingState, prevRoutingState)) {
      prevRoutingState = routingState;
    }

    return prevRoutingState;
  };
};

const makeSelectLoading = () => createSelector(
  makeSelectGlobal(),
  (globalState) => globalState.loading
);

const makeSelectEnv = () => createSelector(
  makeSelectGlobal(),
  (envState) => envState.env
);

const makeSelectBlogUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.blogUrl
);

const makeSelectDashboardUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.dashboardUrl
);

const makeSelectLoginUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.loginUrl
);

const makeSelectRegisterUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.registerUrl
);

export {
  makeSelectGlobal,
  makeSelectLocationState,
  makeSelectLoading,
  makeSelectBlogUrl,
  makeSelectDashboardUrl,
  makeSelectLoginUrl,
  makeSelectRegisterUrl,
};
