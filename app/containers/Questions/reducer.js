/*
 * Home Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 */
import { LOAD_QUESTIONS_TRANSLATIONS, LOADED_QUESTIONS_TRANSLATIONS } from './constants';


// The initial state of the App
const initialState = {
  areQuestionsTranslated: false,
  areQuestionsBeingTranslated: false,
  questions: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
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
