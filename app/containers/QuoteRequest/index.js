/*
 * QuoteRequest
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Container from 'canlaw-components/components/Container';
import { makeSelectCategory, makeSelectAnswers } from './selectors';
import { fetchCategory, setCategory, setAnswer, sendQuoteRequest } from './actions';
import CategorySearchHeader from '../../components/CategorySearchHeader';
import Questions from '../Questions';
import messages from './messages';

export class QuoteRequest extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  /**
   * If the category slug in the url (props.categorySlug) is different than what we have in the
   * state, we will prefer the category in the URL and we will fetch it.
   *
   * If the category exists in the state and there's no url, we should redirect to the right url.
   */
  componentDidMount() {
    if (this.props.categorySlug) {
      if (!this.props.category || this.props.category.slug !== this.props.categorySlug) {
        this.props.fetchCategory(this.props.categorySlug);
      }
    }

    this.name = this.props.category ? this.props.category.term : '';
  }

  render() {
    return (
      <div>
        <Helmet
          title="Request a quote free from a lawyer | Canlaw"
          meta={[
            { name: 'description', content: 'Request a quote free from a lawyer by quickly answering few questions.' },
          ]}
        />

        <CategorySearchHeader
          initialText={this.name}
          onChoseCategory={this.props.setCategory}
          hideHits={!!this.props.category}
        />

        <Container>
          <Questions
            answers={this.props.answers}
            category={this.props.category}
            onAnswered={this.props.setAnswer}
          />

          <button onClick={this.props.sendRequest}>
            <FormattedMessage {...messages.save} />
          </button>

        </Container>

      </div>
    );
  }
}

QuoteRequest.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  categorySlug: PropTypes.string,
  category: PropTypes.object,
  // placeName: PropTypes.string,
  // place: PropTypes.object,
  setAnswer: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswers(),
  category: makeSelectCategory(),
  categorySlug: (state, ownState) => ownState.params.categorySlug,
  placeName: (state, ownState) => ownState.params.placeName,
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCategory: (category) => dispatch(fetchCategory(category)),
    setCategory: (category) => dispatch(setCategory(category)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    sendRequest: () => dispatch(sendQuoteRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteRequest);
