/**
 *
 * StepsContainer
 *
 */

import React from 'react';
import { Row } from 'hedron';
import Heading from './Heading';
import Wrapper from './Wrapper';
import Content from './Content';

function StepsContainer({ heading, content }) {
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

StepsContainer.propTypes = {
  heading: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
};

export default StepsContainer;
