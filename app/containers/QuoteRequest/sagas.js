import quoteRequestSave from './sagas-functions/quote-request';
import clearAnswers from './sagas-functions/clear-answers';
import category from './sagas-functions/fetch-category';

// All sagas to be loaded
export default [
  category,
  clearAnswers,
  quoteRequestSave,
];
