import quoteRequestSave from './sagas-functions/quote-request';
import questions from './sagas-functions/questions';
import category from './sagas-functions/category';

// All sagas to be loaded
export default [
  category,
  questions,
  quoteRequestSave,
];
