/*
 * Home Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import omit from 'lodash/omit';

import {
  CLEAR_ERROR,
  CLEAR_ERRORS,
  LOAD_QUESTIONS_TRANSLATIONS,
  LOADED_QUESTIONS_TRANSLATIONS,
  PUSH_ERROR,
} from './constants';


// The initial state of the App
const initialState = {
  areQuestionsTranslated: false,
  areQuestionsBeingTranslated: false,
  questions: {},
  errors: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ERROR: {
      if (!action.name) {
        return state;
      }

      if (Array.isArray(state.errors[action.name]) && state.errors[action.name].indexOf(action.error) !== -1) {
        return state;
      }

      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: Array.isArray(state.errors[action.name]) ?
            [...state.errors[action.name], action.error] :
            [action.error],
        },
      };
    }

    case CLEAR_ERROR:
      return {
        ...state,
        errors: omit(state.errors, action.name),
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };

    case LOAD_QUESTIONS_TRANSLATIONS:
      return {
        ...state,
        areQuestionsTranslated: false,
        areQuestionsBeingTranslated: true,
        questions: ((questions) => {
          const all = {};
          questions.forEach((question) => {
            all[question] = question;
          });

          return all;
        })(action.questions || {}),
      };

    case LOADED_QUESTIONS_TRANSLATIONS:
      return {
        ...state,
        areQuestionsTranslated: true,
        areQuestionsBeingTranslated: false,
        questions: action.questions || {},
      };
    default:
      return state;
  }
}

export default homeReducer;
