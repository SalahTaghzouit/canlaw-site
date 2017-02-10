/**
 * TypewriterEffect
 */
import React from 'react';
import Wrapper from './Wrapper';

function TypewriterEffect({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

TypewriterEffect.propTypes = {
  children: React.PropTypes.node,
};

export default TypewriterEffect;
