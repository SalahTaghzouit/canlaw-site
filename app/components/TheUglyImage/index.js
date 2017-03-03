/**
*
* TheUglyImage
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TheUglyImage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TheUglyImage.propTypes = {

};

export default TheUglyImage;
