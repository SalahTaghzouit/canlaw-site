/**
 *
 * LawyerFaqs
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import StepsContainer from '../StepsContainer';
import Button from './Button';
import GreyArea from './GreyArea';
import messages from './messages';

function LawyerFaqs({ registerUrl }) {
  return (
    <GreyArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <StepsContainer
        heading={<FormattedMessage {...messages.faqq1} />}
        content={<FormattedMessage {...messages.faqa1} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.faqq2} />}
        content={<FormattedMessage {...messages.faqa2} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.faqq3} />}
        content={<FormattedMessage {...messages.faqa3} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.faqq4} />}
        content={<FormattedMessage {...messages.faqa4} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.faqq5} />}
        content={<FormattedMessage {...messages.faqa5} />}
      />
      <Button href={registerUrl}>
        <FormattedMessage {...messages.signUpLawyer} />
      </Button>
    </GreyArea>
  );
}

LawyerFaqs.propTypes = {
  registerUrl: React.PropTypes.string.isRequired,
};

export default LawyerFaqs;
