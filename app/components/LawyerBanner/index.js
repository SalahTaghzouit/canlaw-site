/**
 *
 * LawyerBanner
 *
 */
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import A from './A';
import banner from './banner.jpg';
import Button from './Button';
import ContainerDiv from './ContainerDiv';
import H2 from './H2';
import Header from './Header';
import Img from './Img';
import messages from './messages';

function LawyerBanner({ registerUrl, blogUrl }) {
  return (
    <ContainerDiv>
      <Img src={banner} alt={this.props.intl.formatMessage(messages.growAlt)} />
      <Header>
        <FormattedMessage {...messages.grow} />
      </Header>
      <Button href={registerUrl}>
        <FormattedMessage {...messages.signUpLawyer} />
      </Button>
      <H2>
        <FormattedMessage {...messages.nocharge} />
      </H2>
      <A href={`${blogUrl}/pressing-questions-canlaw/`}>
        <FormattedMessage {...messages.readmore} />
      </A>
    </ContainerDiv>
  );
}

LawyerBanner.propTypes = {
  registerUrl: React.PropTypes.string.isRequired,
  blogUrl: React.PropTypes.string.isRequired,
};

export default injectIntl(LawyerBanner);
