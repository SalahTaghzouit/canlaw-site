/**
 *
 * StepsContainer
 *
 */

import { Row } from 'hedron';
import React from 'react';
import Content from './Content';
import Heading from './Heading';
import I from './I';
import Wrapper from './Wrapper';

function StepsContainer({ heading, content, type }) {
  return (
    <Wrapper>
      <Row justifyContent="center">
        <I className={`fa fa-${type}`} />
        <Heading>{heading}</Heading>
        <Content>
          {content}
        </Content>
      </Row>
    </Wrapper>
  );
}

StepsContainer.propTypes = {
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

export default StepsContainer;
