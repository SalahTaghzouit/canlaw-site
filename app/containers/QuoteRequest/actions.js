/*
 *
 * QuoteRequest actions
 *
 */
import {
  SET_CATEGORY,
  SET_ANSWER,
  FETCH_CATEGORY,
  CLEAR_ANSWERS,
  CACHE_CATEGORY,
  CATEGORY_NOT_FETCHED,
  SEND_QUOTE_REQUEST,
  QUOTE_REQUEST_NOT_SAVED,
} from './constants';

/**
 * Fetch category
 *
 * @param slug
 * @returns {{type, slug: *}}
 */
export function fetchCategory(slug) {
  return {
    type: FETCH_CATEGORY,
    slug,
  };
}

/**
 * Cache category
 *
 * @param slug
 * @returns {{type, slug: *}}
 */
export function cacheCategory(slug) {
  return {
    type: CACHE_CATEGORY,
    slug,
  };
}

/**
 * Cache category
 *
 * @param reason
 * @returns {{type, reason: *}}
 */
export function categoryNotFetched(reason) {
  return {
    type: CATEGORY_NOT_FETCHED,
    reason,
  };
}

/**
 * Set category
 *
 * @param category
 * @returns {{type, category: *}}
 */
export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

/**
 * Set an answer
 *
 * @param question
 * @param answer
 * @returns {{type, question: *, answer: *}}
 */
export function setAnswer(question, answer) {
  return {
    type: SET_ANSWER,
    question,
    answer,
  };
}

/**
 * Send the Quote Request
 *
 * @returns {{type}}
 */
export function sendQuoteRequest() {
  return {
    type: SEND_QUOTE_REQUEST,
  };
}

/**
 * Set an answer
 *
 * @returns {{type}}
 */
export function clearAnswers() {
  return {
    type: CLEAR_ANSWERS,
  };
}

/**
 * Quote request was not saved
 *
 * @returns {{type}}
 */
export function quoteRequestNotSaved(reason) {
  return {
    type: QUOTE_REQUEST_NOT_SAVED,
    reason
  };
}
