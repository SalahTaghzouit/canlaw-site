/**
*
* Awards
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Awards() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Awards.propTypes = {

};

export default Awards;
