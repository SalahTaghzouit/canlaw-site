import React from 'react';
import CTA from './CTA';
import HeaderWrapper from './HeaderWrapper';
import Heading from './Heading';

function Header({ heading, ctaMessage, ctaLink }) {
  return (
    <HeaderWrapper>
      <Heading>
        {heading}
      </Heading>
      <CTA href={ctaLink}>
        {ctaMessage}
      </CTA>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  heading: React.PropTypes.node.isRequired,
  ctaLink: React.PropTypes.string.isRequired,
  ctaMessage: React.PropTypes.string.isRequired,
};

export default Header;
