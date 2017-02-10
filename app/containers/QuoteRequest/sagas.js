import quoteRequestSave from './sagas-functions/quote-request';
import category from './sagas-functions/fetch-category';

// All sagas to be loaded
export default [
  category,
  quoteRequestSave,
];
