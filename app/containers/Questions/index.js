/*
 * Questions
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { createStructuredSelector } from 'reselect';
import SectionContent from 'canlaw-components/components/SectionContent';
import { Row, Column } from 'hedron';
import QuestionControl from '../../components/QuestionControl';
import {
  makeSelectAreQuestionsTranslated,
  makeSelectAreQuestionsBeingTranslated,
  makeSelectQuestions,
} from './selectors';
import { loadQuestionsTranslations } from './actions';

export class Questions extends React.PureComponent {

  componentWillMount() {
    this.handleProps(this.props);
  }

  componentWillReceiveProps(props) {
    this.handleProps(props);
  }

  handleProps(props) {
    if (
      !props.areQuestionsBeingTranslated &&
      this.props.questions &&
      (!props.areQuestionsTranslated || !isEqual(props.questions, this.props.questions))
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
  }

  trans(message) {
    return this.props.translatedQuestions[message];
  }

  transOptions(options) {
    const all = [];
    options.forEach(() => {
      all.push({ label: this.props.translatedQuestions[options.value] });
    });
    return all;
  }

  render() {
    return (
      <SectionContent>
        {this.props.areQuestionsTranslated && this.props.questions && this.props.questions.map((question) => (
          <Row key={question.name}>
            <Column>
              <QuestionControl
                type={question.type}
                required
                value={this.props.answers[this.trans(question.name)]}
                onChange={this.props.onAnswered}
                question={this.trans(question.name)}
                placeholder="Please specify"
                options={this.transOptions(question.options)}
              />
            </Column>
          </Row>
        ))}
      </SectionContent>
    );
  }
}

Questions.propTypes = {
  onAnswered: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  areQuestionsTranslated: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  areQuestionsBeingTranslated: React.PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
  translateQuestions: React.PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  translatedQuestions: React.PropTypes.object.isRequired,
  questions: React.PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  onAnswered: (state, ownState) => ownState.onAnswered,
  answers: (state, ownState) => ownState.answers,
  questions: (state, ownState) => ownState.questions,
  translatedQuestions: makeSelectQuestions(),
  areQuestionsTranslated: makeSelectAreQuestionsTranslated(),
  areQuestionsBeingTranslated: makeSelectAreQuestionsBeingTranslated(),
});

const mapDispatchToProps = (dispatch) => ({
  translateQuestions: (questions) => dispatch(loadQuestionsTranslations(questions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
