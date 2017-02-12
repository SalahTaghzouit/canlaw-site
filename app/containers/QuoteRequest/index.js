/*
 * QuoteRequest
 */
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import Button from 'canlaw-components/components/Button';
import Loader from 'canlaw-components/components/Loader';
import { addNotification } from 'canlaw-components/containers/Notification/actions';
import smoothScroll from 'canlaw-components/utils/smoothscroll';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated } from 'canlaw-components/containers/UserProvider/selectors';
import {
  makeSelectAnswers,
  makeSelectAreQuestionsPristine,
  makeSelectCategory,
  makeSelectIsFetchingCategory,
  makeSelectIsSendingQuoteRequest,
  makeSelectLocation,
  makeSelectSavableQuoteRequest,
} from './selectors';
import { makeSelectAreQuestionsValid } from '../Questions/selectors';
import { clearAnswers, fetchCategory, sendQuoteRequest, setAnswer, setLocation } from './actions';
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
      triedSubmitting: false,
    };

    this.handleScriptInject = this.handleScriptInject.bind(this);
    this.handleCategoryWasChosen = this.handleCategoryWasChosen.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  /**
   * If the category slug in the url (props.categorySlug) is different than what we have in the
   * state, we will prefer the category in the URL and we will fetch it.
   *
   * If the category exists in the state and there's no url, nothing to do.
   */
  componentWillMount() {
    if (this.props.categorySlug) {
      if (!this.props.category || this.props.category.id !== this.props.categorySlug) {
        this.props.fetchCategory(this.props.categorySlug);
      }
    }
  }

  componentDidMount() {
    // smoothScroll(document.body, this.questionsForm.offsetTop - 70, 400);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetchingCategory && nextProps.categorySlug) {
      if (this.props.categorySlug !== nextProps.categorySlug) {
        this.setState({
          ...this.state,
          triedSubmitting: false,
        });

        this.props.fetchCategory(nextProps.categorySlug);
        return;
      }
    }

    // Handle when there are no questions in the category (get a fresh copy from server)
    if (!this.props.isFetchingCategory && !isEmpty(nextProps.category) && !nextProps.category.questions) {
      this.props.fetchCategory(this.props.category.id);
    }

    if (nextProps.pristine && get(this.props.location, 'query.autosubmit')) {
      if (nextProps.isAuthenticated) {
        if (!nextProps.isSendingQuoteRequest) {
          this.sendRequest();
        }
      } else {
        this.props.addNotification({
          message: messages.unauthenticatedTryToSubmit,
          level: 'warning',
        });
      }
    }

    if (nextProps.category) {
      this.name = (nextProps.category.human ? nextProps.category.human : nextProps.category.human) || '';
    }
  }


  componentDidUpdate(prevProps) {
    // Scroll to component if we had a new category
    if (prevProps.category.id !== this.props.category.id && this.questionsForm) {
      smoothScroll(document.body, this.questionsForm.offsetTop - 70, 400);
    }
  }

  validate() {
    let clean = this.props.areQuestionsValid;

    const quoteRequest = this.props.savableQuoteRequest;

    if (!quoteRequest.category) {
      // this.props.setError('category', this.props.intl.formatMessage(messages.categoryIsRequired));
      clean = false;
    }

    if (!quoteRequest.lat || !quoteRequest.lng) {
      // this.props.setError('address', this.props.intl.formatMessage(messages.addressIsRequired));
      clean = false;
    }

    return clean;
  }

  sendRequest() {
    this.setState({
      ...this.state,
      triedSubmitting: true,
    });

    if (!this.validate()) {
      this.props.addNotification({
        message: messages.formError,
        level: 'error',
      });
      return;
    }

    this.props.addNotification({
      message: messages.hangOnWeReSending,
      level: 'info',
    });

    this.props.sendRequest();
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
          exampleQuestions={[
            'Divorce procedure',
            'Freelancer contract',
            'Tenancy agreement',
            'Car accident claim',
            'Child custody',
            'I want to buy a house',
          ]}
          category={this.props.category}
          onChoseCategory={this.handleCategoryWasChosen}
        />

        <div ref={(ref) => (this.questionsForm = ref)}>
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
              location={this.props.place}
              showErrors={this.state.triedSubmitting}
              onChoseLocation={this.props.setPlace}
            />}

            <Questions
              questions={this.props.category.questions}
              answers={this.props.answers}
              category={this.props.category}
              onAnswered={this.props.setAnswer}
              showErrors={this.state.triedSubmitting}
            />

            <Button disabled={this.props.isSendingQuoteRequest} onClick={this.sendRequest}>
              <FormattedMessage {...messages.save} />
            </Button>

            <Loader
              message={<FormattedMessage {...messages.waitWhileWeSave} />}
              show={this.props.isSendingQuoteRequest}
            />

          </NarrowContainer>
          }
        </div>

      </div>
    );
  }
}

QuoteRequest.propTypes = {
  fetchCategory: React.PropTypes.func.isRequired,
  setCategory: React.PropTypes.func.isRequired,
  categorySlug: React.PropTypes.string,
  category: React.PropTypes.object,
  setAnswer: React.PropTypes.func.isRequired,
  sendRequest: React.PropTypes.func.isRequired,
  answers: React.PropTypes.object.isRequired,
  pristine: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  isAuthenticated: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  clearAnswers: React.PropTypes.func.isRequired,
  isSendingQuoteRequest: React.PropTypes.bool.isRequired,
  setPlace: React.PropTypes.func.isRequired,
  mapsApiKey: React.PropTypes.string.isRequired,
  location: React.PropTypes.object.isRequired,
  isFetchingCategory: React.PropTypes.bool.isRequired,
  addNotification: React.PropTypes.func.isRequired,
  savableQuoteRequest: React.PropTypes.object.isRequired,
  areQuestionsValid: React.PropTypes.bool.isRequired,
  place: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  answers: makeSelectAnswers(),
  category: makeSelectCategory(),
  isAuthenticated: makeSelectIsAuthenticated(),
  isSendingQuoteRequest: makeSelectIsSendingQuoteRequest(),
  pristine: makeSelectAreQuestionsPristine(),
  categorySlug: (state, ownState) => ownState.params.categorySlug,
  placeName: (state, ownState) => ownState.params.placeName,
  mapsApiKey: makeSelectMapsApiKey(),
  isFetchingCategory: makeSelectIsFetchingCategory(),
  areQuestionsValid: makeSelectAreQuestionsValid(),
  savableQuoteRequest: makeSelectSavableQuoteRequest(),
  place: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCategory: (category) => dispatch(fetchCategory(category)),
    setCategory: (category) => dispatch(push(`/quote-request/${category.id}`)),
    setAnswer: (question, answer) => dispatch(setAnswer(question, answer)),
    sendRequest: () => dispatch(sendQuoteRequest()),
    clearAnswers: () => dispatch(clearAnswers()),
    setPlace: (location) => dispatch(setLocation(location)),
    addNotification: (notification) => dispatch(addNotification(notification)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteRequest);
