/*
 * QuoteRequest Messages
 *
 * This contains all the text for the QuoteRequest component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  save: {
    id: 'canlaw.containers.QuoteRequest.save',
    defaultMessage: 'Get my quotes',
  },
  waitWhileWeSave: {
    id: 'canlaw.containers.QuoteRequest.waitWhileWeSave',
    defaultMessage: 'We are trying to send the quote request to the lawyers, please wait...',
  },
  wereNearlyThere: {
    id: 'canlaw.containers.QuoteRequest.wereNearlyThere',
    defaultMessage: "We're nearly there...",
  },
  answerTheseQuestions: {
    id: 'canlaw.containers.QuoteRequest.answerTheseQuestions',
    defaultMessage: 'Please fill in this form so that we can find lawyers who can help you with {what}',
  },
  unauthenticatedTryToSubmit: {
    id: 'canlaw.containers.QuoteRequest.unauthenticatedTryToSubmit',
    defaultMessage: 'It looks like you have tried to submit a quote before then you have been logged out, please try again.',
  },
});
