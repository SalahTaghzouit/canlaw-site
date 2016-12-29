/*
 * Questions
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import difference from 'lodash/difference';
import indexOf from 'lodash/indexOf';
import Wrapper from './Wrapper';
import QuestionControl from '../../components/QuestionControl';
import messages from './messages';

export class Questions extends React.PureComponent {
  trans(message) {
    return this.props.intl.formatMessage(message);
  }

  render() {
    const parties = (
      <QuestionControl
        type="number"
        defaultValue="2"
        required
        value={this.props.answers[this.trans(messages.parties)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.parties)}
      />
    );

    const businessNature = (
      <QuestionControl
        required
        value={this.props.answers[this.trans(messages.businessNature)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.businessNature)}
        placeholder={this.trans(messages.businessNatureExample)}
      />
    );

    const areasOfConcern = (
      <QuestionControl
        required
        value={this.props.answers[this.trans(messages.areasOfConcern)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.areasOfConcern)}
        placeholder={this.trans(messages.areasOfConcernExample)}
      />
    );

    const whatDoYouHope = (
      <QuestionControl
        required
        value={this.props.answers[this.trans(messages.whatDoYouHope)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.whatDoYouHope)}
        placeholder={this.trans(messages.whatDoYouHopeExample)}
      />
    );

    const howManyOwners = (
      <QuestionControl
        type="number"
        required
        value={this.props.answers[this.trans(messages.howManyOwners)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.howManyOwners)}
        placeholder={this.trans(messages.howManyOwners)}
      />
    );

    const howsItFunded = (
      <QuestionControl
        options={[
          this.trans(messages.foundersSavings),
          this.trans(messages.notSure),
          this.trans(messages.notSure),
          this.trans(messages.notSure),
        ]}
        required
        value={this.props.answers[this.trans(messages.howsItFunded)]}
        onChange={this.props.onAnswered}
        question={this.trans(messages.howsItFunded)}
        placeholder={this.trans(messages.howsItFunded)}
      />
    );

    return (
      <Wrapper>
        {(difference(['parties', 'businessNature'], this.props.category.questions).length < 2) &&
        <div className="row">
          {indexOf(this.props.category.questions, 'parties') !== -1 &&
          <div className="col-md-4">
            {parties}
          </div>
          }
          {indexOf(this.props.category.questions, 'businessNature') !== -1 &&
          <div className="col-md-8">
            {businessNature}
          </div>
          }
        </div>
        }
        {indexOf(this.props.category.questions, 'areasOfConcern') !== -1 &&
        <div className="row">
          <div className="col-md-12">
            {areasOfConcern}
          </div>
        </div>
        }

        {indexOf(this.props.category.questions, 'whatDoYouHope') !== -1 &&
        <div className="row">
          <div className="col-md-12">
            {whatDoYouHope}
          </div>
        </div>
        }

        {(difference(['howManyOwners', 'howsItFunded'], this.props.category.questions).length === 0) &&
        <div className="row">
          <div className="col-md-5">
            {howManyOwners}
          </div>
          <div className="col-md-7">
            {howsItFunded}
          </div>
        </div>
        }

      </Wrapper>
    );
  }
}

Questions.propTypes = {
  onAnswered: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  category: PropTypes.shape({
    id: React.PropTypes.string,
    questions: React.PropTypes.arrayOf(React.PropTypes.string),
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  onAnswered: (state, ownState) => ownState.onAnswered,
  answers: (state, ownState) => ownState.answers,
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Questions));
