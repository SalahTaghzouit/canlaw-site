import React from 'react';
import Label from './Label';
import Wrapper from './Wrapper';

function Control(props) {
  return (
    <Wrapper>
      {props.label && <Label>{props.label}</Label>}
      {props.children}
    </Wrapper>
  );
}

Control.propTypes = {
  label: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  children: React.PropTypes.node,
};

export default Control;
