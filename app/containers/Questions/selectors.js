import { createSelector } from 'reselect';

/**
 * Direct selector to the questions state domain
 */
const selectQuestionsDomain = () => (state) => state.get('questions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Questions
 */

const makeSelectQuestions = () => createSelector(
  selectQuestionsDomain(),
  (questions) => questions.get('list').toJS()
);

export default makeSelectQuestions;
export {
  selectQuestionsDomain,
};
