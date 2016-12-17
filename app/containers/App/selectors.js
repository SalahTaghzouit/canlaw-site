/**
 * The global state selectors
 */
import { createSelector } from 'reselect';


// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const makeSelectLoading = () => createSelector(
  makeSelectGlobal(),
  (globalState) => globalState.get('loading')
);

const makeSelectEnv = () => createSelector(
  makeSelectGlobal(),
  (envState) => envState.get('env')
);

const makeSelectBlogUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.get('blogUrl')
);

const makeSelectDashboardUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.get('dashboardUrl')
);

const makeSelectLoginUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.get('loginUrl')
);

const makeSelectRegisterUrl = () => createSelector(
  makeSelectEnv(),
  (envState) => envState.get('registerUrl')
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
