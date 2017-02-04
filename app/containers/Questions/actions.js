import { LOAD_QUESTIONS_TRANSLATIONS, LOADED_QUESTIONS_TRANSLATIONS } from './constants';


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
