/**
 * TypewriterEffect
 */
import React from 'react';
import Wrapper from './Wrapper';

function TypewriterEffect({ children }) { // eslint-disable-line react/prop-types
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

TypewriterEffect.propTypes = {};

export default TypewriterEffect;
