/*
 * Category Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import { fromJS } from 'immutable';
import { CHOOSE_CATEGORY } from './constants';


// The initial state of the App
const initialState = fromJS({
  data: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return state
        .set('data', action.category);
    default:
      return state;
  }
}

export default appReducer;
