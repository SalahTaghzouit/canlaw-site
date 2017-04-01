import { clearError, clearErrors, loadedQuestionsTranslations, loadQuestionsTranslations, pushError } from '../actions';
import {
  CLEAR_ERROR,
  CLEAR_ERRORS,
  LOAD_QUESTIONS_TRANSLATIONS,
  LOADED_QUESTIONS_TRANSLATIONS,
  PUSH_ERROR,
} from '../constants';

describe('Questions actions', () => {
  describe('Load Questions Translations', () => {
    it('should give me a LOAD_QUESTIONS_TRANSLATIONS', () => {
      const expected = {
        type: LOAD_QUESTIONS_TRANSLATIONS,
        questions: 1,
      };

      expect(loadQuestionsTranslations(1)).toEqual(expected);
    });
  });

  describe('Loaded Questions Translations', () => {
    it('should give me a LOADED_QUESTIONS_TRANSLATIONS', () => {
      const expected = {
        type: LOADED_QUESTIONS_TRANSLATIONS,
        questions: 1,
      };

      expect(loadedQuestionsTranslations(1)).toEqual(expected);
    });
  });

  describe('Push Error', () => {
    it('should give me a PUSH_ERROR', () => {
      const name = { name: 'name' };
      const error = { error: 'error' };

      const expected = {
        type: PUSH_ERROR,
        name,
        error,
      };

      expect(pushError(name, error)).toEqual(expected);
    });
  });

  describe('Clear Error', () => {
    it('should give me a CLEAR_ERROR', () => {
      const expected = {
        type: CLEAR_ERROR,
        name: 'name',
      };

      expect(clearError('name')).toEqual(expected);
    });
  });

  describe('Clear Errors', () => {
    it('should give me a CLEAR_ERRORS', () => {
      const expected = {
        type: CLEAR_ERRORS,
      };
      expect(clearErrors()).toEqual(expected);
    });
  });
});
