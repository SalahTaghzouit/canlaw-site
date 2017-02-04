/**
 * The global state selectors
 */
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

export {
  makeSelectQuestionsDomain,
  makeSelectAreQuestionsTranslated,
  makeSelectAreQuestionsBeingTranslated,
  makeSelectQuestions,
  makeSelectQuestionsToTranslate,
};
