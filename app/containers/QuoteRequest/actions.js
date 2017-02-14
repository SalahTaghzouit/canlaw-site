/*
 *
 * QuoteRequest actions
 *
 */
import { LOGOUT } from 'canlaw-components/containers/UserProvider/constants';
import {
  SET_CATEGORY,
  SET_ANSWER,
  FETCH_CATEGORY,
  CLEAR_ANSWERS,
  CACHE_CATEGORY,
  CATEGORY_NOT_FETCHED,
  SEND_QUOTE_REQUEST,
  QUOTE_REQUEST_NOT_SAVED,
  SET_LOCATION,
} from './constants';

/**
 * Fetch category
 *
 * @param id
 * @returns {{type, id: *}}
 */
export function fetchCategory(id) {
  return {
    type: FETCH_CATEGORY,
    id,
  };
}

/**
 * Cache category
 *
 * @param id
 * @returns {{type, id: *}}
 */
export function cacheCategory(id) {
  return {
    type: CACHE_CATEGORY,
    id,
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
 * @param order
 * @returns {{type, question: *, answer: *}}
 */
export function setAnswer(question, answer, order) {
  return {
    type: SET_ANSWER,
    question,
    answer,
    order,
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
    reason,
  };
}

export function logout(reason, soft) {
  return {
    type: LOGOUT,
    reason,
    soft,
  };
}


export function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}
