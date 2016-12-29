/*
 * Home Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import { CLEAR_CATEGORY, START_QUOTE_REQUEST } from './constants';


// The initial state of the App
const initialState = {
  category: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case START_QUOTE_REQUEST:
      return { ...state, category: action.category };
    case CLEAR_CATEGORY:
      return { ...state, category: {} };
    default:
      return state;
  }
}

export default homeReducer;
