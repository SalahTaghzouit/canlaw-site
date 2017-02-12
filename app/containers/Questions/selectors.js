/**
 * The global state selectors
 */
import isEmpty from 'lodash/isEmpty';
import { createSelector } from 'reselect';

const makeSelectQuestionsDomain = () => (state) => state.questions;

const makeSelectAreQuestionsTranslated = () => createSelector(
  makeSelectQuestionsDomain(),
  (questionsDomain) => questionsDomain.areQuestionsTranslated
);

const makeSelectAreQuestionsBeingTranslated = () => createSelector(
  makeSelectQuestionsDomain(),
  (questionsDomain) => questionsDomain.areQuestionsBeingTranslated
);

const makeSelectQuestionsToTranslate = () => createSelector(
  makeSelectQuestionsDomain(),
  (questionsDomain) => Object.keys(questionsDomain.questions)
);

const makeSelectQuestions = () => createSelector(
  makeSelectQuestionsDomain(),
  (questionsDomain) => questionsDomain.questions
);

const makeSelectErrors = () => createSelector(
  makeSelectQuestionsDomain(),
  (questionsDomain) => questionsDomain.errors
);

const makeSelectAreQuestionsValid = () => createSelector(
  makeSelectErrors(),
  (errors) => isEmpty(errors)
);

export {
  makeSelectQuestionsDomain,
  makeSelectAreQuestionsTranslated,
  makeSelectAreQuestionsBeingTranslated,
  makeSelectQuestions,
  makeSelectQuestionsToTranslate,
  makeSelectAreQuestionsValid,
  makeSelectErrors,
};
