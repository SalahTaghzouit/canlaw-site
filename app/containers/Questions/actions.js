import {
  CLEAR_ERROR,
  CLEAR_ERRORS,
  LOAD_QUESTIONS_TRANSLATIONS,
  LOADED_QUESTIONS_TRANSLATIONS,
  PUSH_ERROR,
} from './constants';


export function loadQuestionsTranslations(questions) {
  return {
    type: LOAD_QUESTIONS_TRANSLATIONS,
    questions,
  };
}

export function loadedQuestionsTranslations(questions) {
  return {
    type: LOADED_QUESTIONS_TRANSLATIONS,
    questions,
  };
}

export function pushError(name, error) {
  return {
    type: PUSH_ERROR,
    name,
    error,
  };
}

export function clearError(name) {
  return {
    type: CLEAR_ERROR,
    name,
  };
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS,
  };
}
