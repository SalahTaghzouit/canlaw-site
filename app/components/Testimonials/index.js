/**
*
* Testimonials
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Testimonials() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Testimonials.propTypes = {

};

export default Testimonials;
