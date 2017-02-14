/**
 * OtherNiceBox
 */

import React from 'react';
import { Row } from 'hedron';
import Heading from './Heading';
import I from './I';
import Wrapper from './Wrapper';

function OtherNiceBox({ type, heading }) {
  return (
    <Wrapper>
      <Row>
        <I className={`fa fa-${type}`} />
      </Row>
      <Row justify-content="center">
        <Heading>{heading}</Heading>
      </Row>
    </Wrapper>
  );
}

OtherNiceBox.propTypes = {
  type: React.PropTypes.string.isRequired,
  heading: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
};

export default OtherNiceBox;
