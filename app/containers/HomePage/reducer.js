/*
 * Category Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import { fromJS } from 'immutable';
import { CLEAR_CATEGORY } from './constants';


// The initial state of the App
const initialState = fromJS({
  category: {},
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CATEGORY:
      return state
        .set('category', {});
    default:
      return state;
  }
}

export default homeReducer;
