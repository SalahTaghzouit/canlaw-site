/**
 *
 * NiceBox
 *
 */
import React from 'react';
import Wrapper from './Wrapper';
import Heading from './Heading';
import Content from './Content';
import Separator from './Separator';

function NiceBox({ heading, content }) {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Separator hover={false} />
      <Content>{content}</Content>
    </Wrapper>
  );
}

NiceBox.propTypes = {
  heading: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.node.isRequired,
  ]).isRequired,
};

export default NiceBox;
