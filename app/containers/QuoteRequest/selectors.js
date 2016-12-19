import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';

/**
 * Direct selector to the quoteRequest state domain
 */
const selectQuoteRequestDomain = () => (state) => state.get('quoteRequest');

/**
 * Other specific selectors
 */
const makeSelectCategory = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.get('category').toJS()
);

const selectCategoryFromCache = (slug) => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.getIn(['categoryCache', slug]).toJS()
);

const makeSelectAnswers = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.get('answers').toJS()
);

const makeSelectCategorySlug = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.get('toFetch').toJS()
);

const makeSelectSavableQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequest) => ({
    category: isObject(quoteRequest.category) ? quoteRequest.category.id : '',
    place: quoteRequest.place,
    answers: quoteRequest.answers,
  })
);

/**
 * Default selector used by QuoteRequest
 */

const makeSelectQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequest) => quoteRequest.toJS()
);

export default makeSelectQuoteRequest;
export {
  selectQuoteRequestDomain,
  makeSelectCategory,
  makeSelectAnswers,
  makeSelectCategorySlug,
  selectCategoryFromCache,
  makeSelectSavableQuoteRequest,
};
