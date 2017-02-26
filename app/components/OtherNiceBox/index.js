/**
 * OtherNiceBox
 */

import React from 'react';
import { Row } from 'hedron';
import Heading from './Heading';
import I from './I';
import Wrapper from './Wrapper';
import Content from './Content';

function OtherNiceBox({ type, heading, content }) {
  return (
    <Wrapper>
      <Row>
        <I className={`fa fa-${type}`} />
      </Row>
      <Row justifyContent="center">
        <Heading>{heading}</Heading>
        <Content>
          {content}
        </Content>
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
  content: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
};

export default OtherNiceBox;
