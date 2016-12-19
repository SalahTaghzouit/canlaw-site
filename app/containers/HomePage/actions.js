import { START_QUOTE_REQUEST, CLEAR_CATEGORY } from './constants';

export function startQuoteRequest(category) {
  return {
    type: START_QUOTE_REQUEST,
    category,
  };
}

export function clearCategory() {
  return {
    type: CLEAR_CATEGORY,
  };
}
