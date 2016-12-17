/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import { fromJS } from 'immutable';
import env from '../../utils/env';

import {
  SHOW_LOADING,
  HIDE_LOADING,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  loading: false,
  env,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return state
        .set('loading', true);
    case HIDE_LOADING:
      return state
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
