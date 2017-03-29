/**
 *
 * GrowYourPractice
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HowLawyersWork from '../../components/HowLawyersWork';
import LawyerBanner from '../../components/LawyerBanner';
import LaywerFaqs from '../../components/LawyerFaqs';
import { makeSelectBlogUrl, makeSelectRegisterUrl } from '../App/selectors';

class GrowYourPractice extends React.PureComponent {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LawyerBanner
          blogUrl={this.props.blogUrl}
          registerUrl={this.props.registerUrl}
        />
        <HowLawyersWork />
        <LaywerFaqs />
      </div>
    );
  }
}

GrowYourPractice.propTypes = {
  blogUrl: React.PropTypes.string.isRequired,
  registerUrl: React.PropTypes.string.isRequired,
};

const mapStateToProps = () => createStructuredSelector({
  blogUrl: makeSelectBlogUrl(),
  registerUrl: makeSelectRegisterUrl(),
});

export default connect(mapStateToProps)(GrowYourPractice);
