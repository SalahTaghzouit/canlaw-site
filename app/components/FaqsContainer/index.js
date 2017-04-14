/**
 *
 * FaqsContainer
 *
 */

import { Row } from 'hedron';
import React from 'react';
import Content from './Content';
import Heading from './Heading';
import Wrapper from './Wrapper';

function FaqsContainer({ heading, content }) {
  return (
    <Wrapper>
      <Row justifyContent="center">
        <Heading>{heading}</Heading>
        <Content>
          {content}
        </Content>
      </Row>
    </Wrapper>
  );
}

FaqsContainer.propTypes = {
  heading: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
};

export default FaqsContainer;
