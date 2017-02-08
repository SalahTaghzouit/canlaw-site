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

const makeSelectRecoverFromLogin = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.recoverFromLogin
);

const makeSelectIsSendingQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => quoteRequestDomain.isSendingQuoteRequest
);

const makeSelectSavableQuoteRequest = () => createSelector(
  selectQuoteRequestDomain(),
  (quoteRequestDomain) => ({
    category: quoteRequestDomain.category.id,
    lat: quoteRequestDomain.place.lat,
    lng: quoteRequestDomain.place.lng,
    answers: quoteRequestDomain.answers,
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
  makeSelectRecoverFromLogin,
  makeSelectIsSendingQuoteRequest,
};
