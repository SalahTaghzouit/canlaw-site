/*
 * Questions
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Wrapper from './Wrapper';
import QuestionControl from '../../components/QuestionControl';
import messages from './messages';

export class Questions extends React.PureComponent {

  trans(message) {
    return this.props.intl.formatMessage(message);
  }

  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-md-4">
            <QuestionControl
              type="number"
              required
              defaultValue="2"
              value={this.props.answers[this.trans(messages.parties)]}
              onChange={this.props.onAnswered}
              question={this.trans(messages.parties)}
            />
          </div>
          <div className="col-md-8">
            <QuestionControl
              required
              value={this.props.answers[this.trans(messages.businessNature)]}
              onChange={this.props.onAnswered}
              question={this.trans(messages.businessNature)}
              placeholder={this.trans(messages.businessNatureExample)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <QuestionControl
              required
              value={this.props.answers[this.trans(messages.areasOfConcern)]}
              onChange={this.props.onAnswered}
              question={this.trans(messages.areasOfConcern)}
              placeholder={this.trans(messages.areasOfConcernExample)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <QuestionControl
              required
              value={this.props.answers[this.trans(messages.whatDoYouHope)]}
              onChange={this.props.onAnswered}
              question={this.trans(messages.whatDoYouHope)}
              placeholder={this.trans(messages.whatDoYouHopeExample)}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

Questions.propTypes = {
  onAnswered: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  onAnswered: (state, ownState) => ownState.onAnswered,
  answers: (state, ownState) => ownState.answers,
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Questions));
