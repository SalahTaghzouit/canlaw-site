/**
 *
 * NiceBox
 *
 */
import React from 'react';
import Wrapper from './Wrapper';
import SubWrapper from './SubWrapper';
import Heading from './Heading';
import Content from './Content';
import Separator from './Separator';
import I from './I';

function NiceBox({ heading, content, type }) {
  return (
    <Wrapper>
      <SubWrapper>
        <I className={`fa fa-${type}`} />
        <Heading>{heading}</Heading>
      </SubWrapper>
      <Separator hover={false} />
      <Content>{content}</Content>
    </Wrapper>
  );
}

NiceBox.propTypes = {
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

export default NiceBox;
