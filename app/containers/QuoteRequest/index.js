/*
 * QuoteRequest
 */
import React from 'react';
// import history from 'history';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Button from 'canlaw-components/components/Button';
import Loader from 'canlaw-components/components/Loader';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectIsAuthenticated,
  makeSelectTriedLoggingIn,
} from 'canlaw-components/containers/UserProvider/selectors';
import {
  makeSelectCategory,
  makeSelectAnswers,
  makeSelectRecoverFromLogin,
  makeSelectIsSendingQuoteRequest,
} from './selectors';
import { fetchCategory, setCategory, setAnswer, sendQuoteRequest, setRecoverFromLogin, clearAnswers } from './actions';
import CategorySearchHeader from '../../components/CategorySearchHeader';
import Questions from '../Questions';
import NarrowContainer from './NarrowContainer';
import messages from './messages';

export class QuoteRequest extends React.PureComponent {

  constructor(props) {
    super(props);

    this.handleCategoryWasChosen = this.handleCategoryWasChosen.bind(this);
  }

  /**
   * If the category slug in the url (props.categorySlug) is different than what we have in the
   * state, we will prefer the category in the URL and we will fetch it.
   *
   * If the category exists in the state and there's no url, we should redirect to the right url.
   */
  componentWillMount() {
    if (this.props.categorySlug) {
      if (!this.props.category || this.props.category.slug !== this.props.categorySlug) {
        this.props.fetchCategory(this.props.categorySlug);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recoverFromLogin) {
      if (nextProps.isAuthenticated) {
        nextProps.sendRequest();
      } else if (nextProps.triedLoggingIn) {
        nextProps.setRecoverFromLogin(false);
      }
    }

    this.name = this.props.category ? this.props.category.human : '';
  }

  handleCategoryWasChosen(category) {
    this.props.clearAnswers();
    this.props.setCategory(category);
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
          exampleQuestions={['this is a test', 'and this is another test']}
          initialText={this.name}
          onChoseCategory={this.handleCategoryWasChosen}
        />

        {this.props.category.questions && <NarrowContainer>

          <Questions
            questions={this.props.category.questions}
            answers={this.props.answers}
            category={this.props.category}
            onAnswered={this.props.setAnswer}
          />

          <Loader
            message={<FormattedMessage {...messages.waitWhileWeSave} />}
            show={this.props.isSendingQuoteRequest}
          />

          <Button disabled={this.props.isSendingQuoteRequest} onClick={this.props.sendRequest}>
            <FormattedMessage {...messages.save} />
          </Button>

        </NarrowContainer>}


      </div>
    );
  }
}

QuoteRequest.propTypes = {
  fetchCategory: React.PropTypes.func.isRequired,
  setCategory: React.PropTypes.func.isRequired,
  categorySlug: React.PropTypes.string,
  category: React.PropTypes.object,
  // address: React.PropTypes.string,
  // place: React.PropTypes.object,
  setAnswer: React.PropTypes.func.isRequired,
  sendRequest: React.PropTypes.func.isRequired,
  answers: React.PropTypes.object.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  triedLoggingIn: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  recoverFromLogin: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  setRecoverFromLogin: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  clearAnswers: React.PropTypes.func.isRequired,
  isSendingQuoteRequest: React.PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswers(),
  category: makeSelectCategory(),
  isAuthenticated: makeSelectIsAuthenticated(),
  triedLoggingIn: makeSelectTriedLoggingIn(),
  recoverFromLogin: makeSelectRecoverFromLogin(),
  isSendingQuoteRequest: makeSelectIsSendingQuoteRequest(),
  categorySlug: (state, ownState) => ownState.params.categorySlug,
  placeName: (state, ownState) => ownState.params.placeName,
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCategory: (category) => dispatch(fetchCategory(category)),
    setCategory: (category) => dispatch(setCategory(category)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    sendRequest: () => dispatch(sendQuoteRequest()),
    clearAnswers: () => dispatch(clearAnswers()),
    setRecoverFromLogin: (bool) => dispatch(setRecoverFromLogin(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteRequest);
