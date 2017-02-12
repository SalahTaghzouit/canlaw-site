import React from 'react';
import Label from './Label';
import Wrapper from './Wrapper';
import ErrorsList from './ErrorsList';
import Error from './Error';

function Control({ label, children, errors }) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {children}

      {errors && <ErrorsList>
        <Error>{errors.map((error) => (error))}</Error>
      </ErrorsList>}
    </Wrapper>
  );
}

Control.propTypes = {
  label: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]),
  children: React.PropTypes.node,
  errors: React.PropTypes.array,
};

export default Control;
