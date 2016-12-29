import { createSelector } from 'reselect';

/**
 * Direct selector to the quoteRequest state domain
 */
const selectQuoteRequestDomain = () => (state) => state.quoteRequest;

/**
 * Other specific selectors
 */
const makeSelectCategory = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.category
);

const selectCategoryFromCache = (id) => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.categoryCache[id]
);

const makeSelectAnswers = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.answers
);

const makeSelectCategoryId = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.toFetch
);

const makeSelectSavableQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequest) => ({
    category: quoteRequest.category.id,
    lat: quoteRequest.place.lat || 21.11132,
    lng: quoteRequest.place.lng || 122.2132,
    answers: quoteRequest.answers,
  })
);

/**
 * Default selector used by QuoteRequest
 */

const makeSelectQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequest) => quoteRequest
);

export default makeSelectQuoteRequest;
export {
  selectQuoteRequestDomain,
  makeSelectCategory,
  makeSelectAnswers,
  makeSelectCategoryId,
  selectCategoryFromCache,
  makeSelectSavableQuoteRequest,
};
