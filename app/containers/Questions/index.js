/*
 * Questions
 */
import React from 'react';
import isBoolean from 'lodash/isBoolean';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from 'canlaw-components/components/LoadingIndicator';
import { Column, Row } from 'hedron';
import QuestionControl from '../../components/QuestionControl';
import {
  makeSelectAreQuestionsBeingTranslated,
  makeSelectAreQuestionsTranslated,
  makeSelectErrors,
  makeSelectQuestions,
} from './selectors';
import { clearError, clearErrors, loadQuestionsTranslations, pushError } from './actions';
import messages from './messages';

export class Questions extends React.PureComponent {

  constructor(props) {
    super(props);
    this.transOptions = this.transOptions.bind(this);
    this.trans = this.trans.bind(this);
    this.onAnswered = this.onAnswered.bind(this);
    this.validate = this.validate.bind(this);
    this.isQuestionRequired = this.isQuestionRequired.bind(this);
    this.shouldShowErrors = this.shouldShowErrors.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
    this.handleProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.handleProps(nextProps);

    if (
      (!isEqual(this.props.questions, nextProps.questions) && nextProps.areQuestionsTranslated) ||
      !isEqual(this.props.translatedQuestions, nextProps.translatedQuestions)
    ) {
      nextProps.clearErrors();
      nextProps.questions.forEach((question) => this.validate(question, nextProps.answers[this.trans(question.name, nextProps)], nextProps));
    }
  }

  onAnswered(questionName, answer, question) {
    this.validate(question, answer);
    this.props.onAnswered(questionName, answer);
  }

  handleProps(props) {
    if (
      !isEqual(props.questions, this.props.questions) ||
      (
        !props.areQuestionsBeingTranslated &&
        !isEmpty(props.questions) &&
        !props.areQuestionsTranslated
      )
    ) {
      const all = props.questions.map((question) => question.name);
      props.questions.forEach((question) => {
        if (question.options) {
          question.options.forEach((option) => {
            all.push(option);
          });
        }
      });

      props.translateQuestions(all);
    }

    this.questions = this.props.questions.filter((question) => this.isQuestionRequired(question, props));
  }

  validate(question, answer, theProps) {
    const props = theProps || this.props;

    let clean = true;

    if (this.isQuestionRequired(question, props) && (!answer || answer === '')) {
      props.pushError(
        question.name,
        props.intl.formatMessage(messages.required)
      );
      clean = false;
    }

    if (clean) {
      props.clearError(question.name);
    }
  }

  isQuestionRequired(question, props) {
    if (!question.rules) {
      return true;
    }

    for (let i = 0; i < question.rules.length; i += 1) {
      const rule = question.rules[i];
      if (rule.indexOf('required_if') !== -1) {
        const field = rule.substring(rule.indexOf(':') + 1, rule.indexOf(','));
        const value = rule.substring(rule.indexOf(',') + 1);

        return props.answers[this.trans(field, props)] === this.trans(value, props);
      }
    }

    return true;
  }

  shouldShowErrors() {
    return isBoolean(this.props.showErrors) ? this.props.showErrors : true;
  }

  trans(message, theProps) {
    const props = theProps || this.props;
    return props.translatedQuestions[message] || message;
  }

  transOptions(options) {
    if (!Array.isArray(options)) {
      return options;
    }
    return options.map((option) => this.trans(option));
  }

  render() {
    if (this.props.areQuestionsBeingTranslated) {
      return (<LoadingIndicator />);
    }

    return (
      <div>
        {this.props.areQuestionsTranslated && !isEmpty(this.props.questions) && this.questions.map((question) => (
          <Row key={question.name}>
            <Column>
              <QuestionControl
                type={question.type}
                required
                value={this.props.answers[this.trans(question.name)]}
                onChange={this.onAnswered}
                label={this.trans(question.name)}
                question={question}
                placeholder=""
                othersText={this.trans('other')}
                options={this.transOptions(question.options)}
                errors={this.props.errors[question.name]}
                showErrors={this.shouldShowErrors()}
              />
            </Column>
          </Row>
        ))}

        <Row key={'others'}>
          <Column>
            <QuestionControl
              type={'text'}
              required
              value={this.props.answers[this.props.intl.formatMessage(messages.others)]}
              onChange={(question, answer) => this.props.onAnswered(question, answer)}
              label={this.props.intl.formatMessage(messages.others)}
              placeholder=""
            />
          </Column>
        </Row>
      </div>
    );
  }
}

Questions.propTypes = {
  onAnswered: React.PropTypes.func.isRequired,
  answers: React.PropTypes.object.isRequired,
  areQuestionsTranslated: React.PropTypes.bool.isRequired,
  areQuestionsBeingTranslated: React.PropTypes.bool.isRequired,
  translateQuestions: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  translatedQuestions: React.PropTypes.object.isRequired,
  questions: React.PropTypes.array.isRequired,
  intl: React.PropTypes.object.isRequired,
  pushError: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  clearErrors: React.PropTypes.func.isRequired,
  clearError: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  errors: React.PropTypes.object.isRequired,
  showErrors: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  onAnswered: (state, ownState) => ownState.onAnswered,
  answers: (state, ownState) => ownState.answers,
  questions: (state, ownState) => ownState.questions,
  showErrors: (state, ownState) => ownState.showErrors,
  translatedQuestions: makeSelectQuestions(),
  areQuestionsTranslated: makeSelectAreQuestionsTranslated(),
  areQuestionsBeingTranslated: makeSelectAreQuestionsBeingTranslated(),
  errors: makeSelectErrors(),
});

const mapDispatchToProps = (dispatch) => ({
  translateQuestions: (questions) => dispatch(loadQuestionsTranslations(questions)),
  pushError: (name, error) => dispatch(pushError(name, error)),
  clearErrors: () => dispatch(clearErrors()),
  clearError: (name) => dispatch(clearError(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Questions));
