/**
 *
 * LawyerBanner
 *
 */
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import A from './A';
import H2 from './H2';
import Header from './Header';
import Wrapper from './Wrapper';
import messages from './messages';

function LawyerBanner({ registerUrl, blogUrl }) {
  return (
    <Wrapper>
      <Header
        heading={<FormattedMessage {...messages.grow} />}
        ctaMessage={<FormattedMessage {...messages.signUpLawyer} />}
        ctaLink={registerUrl}
      />
      <H2>
        <FormattedMessage {...messages.nocharge} />
      </H2>
      <A href={`${blogUrl}/pressing-questions-canlaw/`}>
        <FormattedMessage {...messages.readmore} />
      </A>
    </Wrapper>
  );
}

LawyerBanner.propTypes = {
  registerUrl: React.PropTypes.string.isRequired,
  blogUrl: React.PropTypes.string.isRequired,
};

export default injectIntl(LawyerBanner);
