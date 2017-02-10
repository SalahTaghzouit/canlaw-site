/*
 * QuoteRequest
 */
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
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
  makeSelectAreQuestionsPristine,
} from './selectors';
import {
  fetchCategory,
  setCategory,
  setAnswer,
  sendQuoteRequest,
  setRecoverFromLogin,
  clearAnswers,
  setLocation,
} from './actions';
import { makeSelectMapsApiKey } from '../App/selectors';
import CategorySearchHeader from '../../components/CategorySearchHeader';
import Questions from '../Questions';
import NarrowContainer from './NarrowContainer';
import messages from './messages';
import QuoteRequestLocation from '../../components/QuoteRequestLocation';
import QuestionsHeading from './QuestionsHeading';
import QuestionsTalk from './QuestionsTalk';

export class QuoteRequest extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      mapsLoaded: false,
    };

    this.handleScriptInject = this.handleScriptInject.bind(this);
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
    if (!isEmpty(nextProps.category) && !nextProps.category.questions) {
      this.props.fetchCategory(this.props.category.id);
    }

    if (nextProps.pristine && get(this.props.location, 'query.autosubmit')) {
      if (nextProps.isAuthenticated) {
        if (!nextProps.isSendingQuoteRequest) {
          nextProps.sendRequest();
        }
      }
    }

    if (this.props.category) {
      this.name = (this.props.category.human ? this.props.category.human : this.props.category.human) || '';
    }
  }

  handleCategoryWasChosen(category) {
    this.props.clearAnswers();
    this.props.setCategory(category);
  }

  handleScriptInject({ scriptTags }) {
    if (scriptTags) {
      scriptTags[0].addEventListener('load', () => {
        this.setState({
          ...this.state,
          mapsLoaded: true,
        });
      });
    }
  }

  render() {
    const maps = !this.state.mapsLoaded ?
      [{ // eslint-disable-line indent
        src: `https://maps.googleapis.com/maps/api/js?key=${this.props.mapsApiKey}&libraries=places`,
        type: 'text/javascript',
      }] :
      [];

    return (
      <div>
        <Helmet
          title="Request a quote free from a lawyer | Canlaw"
          meta={[
            { name: 'description', content: 'Request a quote free from a lawyer by quickly answering few questions.' },
          ]}
          script={maps}
          onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
        />

        <CategorySearchHeader
          exampleQuestions={['this is a test', 'and this is another test']}
          initialText={this.name || ''}
          onChoseCategory={this.handleCategoryWasChosen}
        />

        {this.props.category.questions &&
        <NarrowContainer>

          <QuestionsHeading>
            <FormattedMessage {...messages.wereNearlyThere} />
          </QuestionsHeading>

          <QuestionsTalk>
            <FormattedMessage
              {...messages.answerTheseQuestions}
              values={{ what: this.name }}
            />
          </QuestionsTalk>

          {this.state.mapsLoaded && <QuoteRequestLocation
            onChoseLocation={this.props.setLocation}
          />}

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
        </NarrowContainer>
        }


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
  pristine: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  isAuthenticated: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  triedLoggingIn: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  // recoverFromLogin: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  // setRecoverFromLogin: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  clearAnswers: React.PropTypes.func.isRequired,
  isSendingQuoteRequest: React.PropTypes.bool.isRequired,
  setLocation: React.PropTypes.func.isRequired,
  mapsApiKey: React.PropTypes.string.isRequired,
  location: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswers(),
  category: makeSelectCategory(),
  isAuthenticated: makeSelectIsAuthenticated(),
  triedLoggingIn: makeSelectTriedLoggingIn(),
  recoverFromLogin: makeSelectRecoverFromLogin(),
  isSendingQuoteRequest: makeSelectIsSendingQuoteRequest(),
  pristine: makeSelectAreQuestionsPristine(),
  categorySlug: (state, ownState) => ownState.params.categorySlug,
  placeName: (state, ownState) => ownState.params.placeName,
  mapsApiKey: makeSelectMapsApiKey(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCategory: (category) => dispatch(fetchCategory(category)),
    setCategory: (category) => dispatch(setCategory(category)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    sendRequest: () => dispatch(sendQuoteRequest()),
    clearAnswers: () => dispatch(clearAnswers()),
    setRecoverFromLogin: (bool) => dispatch(setRecoverFromLogin(bool)),
    setLocation: (location) => dispatch(setLocation(location)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteRequest);
