import omit from 'lodash/omit';
import {
  CLEAR_ERROR,
  CLEAR_ERRORS,
  LOAD_QUESTIONS_TRANSLATIONS,
  LOADED_QUESTIONS_TRANSLATIONS,
  PUSH_ERROR,
} from '../constants';
import homeReducer from '../reducer';

let initialState;
describe('requestsReducer', () => {
  beforeEach(() => {
    initialState = {
      areQuestionsTranslated: false,
      areQuestionsBeingTranslated: false,
      questions: {},
      errors: {},
    };
  });

  it('returns the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual(initialState);
  });

  it('PUSH_ERROR should give errors and name', () => {
    const action = {
      type: PUSH_ERROR,
      name: 'name',
      error: 'error',
    };

    const expectedState = {
      ...initialState,
      errors: {
        ...initialState.errors,
        [action.name]: ['error'],
      },
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it('CLEAR_ERROR should give errors: omit(...)', () => {
    const action = {
      type: CLEAR_ERROR,
      name: 'name',
    };

    const expectedState = {
      ...initialState,
      errors: omit(initialState.errors, action.name),
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it('CLEAR_ERRORS should give empty errors', () => {
    const action = {
      type: CLEAR_ERRORS,
    };

    const expectedState = {
      ...initialState,
      errors: {},
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it('LOAD_QUESTIONS_TRANSLATIONS should set areQuestionsTranslated: false, areQuestionsBeingTranslated: true and all', () => {
    const questions = {
      question: [{
        question: 'hello',
      }],
    };
    const action = {
      type: LOAD_QUESTIONS_TRANSLATIONS,
      questions,
    };
    const expectedState = {
      ...initialState,
      areQuestionsTranslated: false,
      areQuestionsBeingTranslated: true,
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it('LOADED_QUESTIONS_TRANSLATIONS should set areQuestionsTranslated: true, areQuestionsBeingTranslated: false', () => {
    const questions = {
      question: [{
        question: 'hello',
      }],
    };
    const action = {
      type: LOADED_QUESTIONS_TRANSLATIONS,
      questions,
    };

    const expectedState = {
      ...initialState,
      areQuestionsTranslated: true,
      areQuestionsBeingTranslated: false,
      questions: action.questions || {},
    };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});
