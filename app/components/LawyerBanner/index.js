/**
 *
 * LawyerBanner
 *
 */
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import A from './A';
import Button from './Button';
import ContainerDiv from './ContainerDiv';
import H2 from './H2';
import Header from './Header';
import messages from './messages';
import Div from './Div';

function LawyerBanner({ registerUrl, blogUrl, intl }) {
  return (
    <Div>
      <ContainerDiv alt={intl.formatMessage(messages.growAlt)}>
        <Header>
          <FormattedMessage {...messages.grow} />
        </Header>
        <Button href={registerUrl}>
          <FormattedMessage {...messages.signUpLawyer} />
        </Button>
      </ContainerDiv>
      <H2>
        <FormattedMessage {...messages.nocharge} />
      </H2>
      <A href={`${blogUrl}/pressing-questions-canlaw/`}>
        <FormattedMessage {...messages.readmore} />
      </A>
    </Div>
  );
}

LawyerBanner.propTypes = {
  registerUrl: React.PropTypes.string.isRequired,
  blogUrl: React.PropTypes.string.isRequired,
  intl: React.PropTypes.object.isRequired,
};

export default injectIntl(LawyerBanner);
