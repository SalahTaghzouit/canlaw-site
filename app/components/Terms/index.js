/**
 * TermsUser
 */

import React from 'react';
import Wrapper from './Wrapper';


function Terms({ children }) { // eslint-disable-line react/prop-types
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Terms.propTypes = {};

export default Terms;
