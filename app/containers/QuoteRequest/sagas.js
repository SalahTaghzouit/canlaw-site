import quoteRequestSave from './sagas-functions/quote-request';
import category from './sagas-functions/fetch-category';
import recover from './sagas-functions/resave-after-recover';

// All sagas to be loaded
export default [
  category,
  quoteRequestSave,
  recover,
];
