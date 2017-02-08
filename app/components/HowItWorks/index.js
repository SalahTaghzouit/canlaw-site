/**
*
* HowItWorks
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GrayArea from '../GrayArea';
import AreaHeader from '../AreaHeader';

function HowItWorks() {
  return (
    <GrayArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <p>
        Find a lawyer in 3 simple steps:<br /><br />
        1. Answer short questionnaire<br />
        2. Receive and compare quotes<br />
        3. Book an appointment with a lawyer!
      </p>
    </GrayArea>
  );
}

HowItWorks.propTypes = {

};

export default HowItWorks;
