/**
 *
 * LawyerFaqs
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import LawyerSignUpButton from '../LawyerSignUpButton';
import OtherNiceBox from '../OtherNiceBox';
import GreyArea from './GreyArea';
import messages from './messages';

function LawyerFaqs() {
  return (
    <GreyArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <OtherNiceBox
        heading={<FormattedMessage {...messages.faqq1} />}
        content={<FormattedMessage {...messages.faqa1} />}
      />
      <OtherNiceBox
        heading={<FormattedMessage {...messages.faqq2} />}
        content={<FormattedMessage {...messages.faqa2} />}
      />
      <OtherNiceBox
        heading={<FormattedMessage {...messages.faqq3} />}
        content={<FormattedMessage {...messages.faqa3} />}
      />
      <OtherNiceBox
        heading={<FormattedMessage {...messages.faqq4} />}
        content={<FormattedMessage {...messages.faqa4} />}
      />
      <OtherNiceBox
        heading={<FormattedMessage {...messages.faqq5} />}
        content={<FormattedMessage {...messages.faqa5} />}
      />
      <LawyerSignUpButton />
    </GreyArea>
  );
}

LawyerFaqs.propTypes = {};

export default LawyerFaqs;
