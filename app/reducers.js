/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import userProviderReducer from 'canlaw-components/containers/UserProvider/reducer';
import languageProviderReducer from './containers/LanguageProvider/reducer';
import globalReducer from './containers/App/reducer';
import quoteRequestReducer from './containers/QuoteRequest/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routeReducer,
    global: globalReducer,
    user: userProviderReducer,
    language: languageProviderReducer,
    quoteRequest: quoteRequestReducer,
    ...asyncReducers,
  });
}
