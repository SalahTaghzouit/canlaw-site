/**
 *
 * QuestionInput
 *
 */
import React from 'react';
import Wrapper from './Wrapper';
import Input from './Input';
import '../Select/scss/default.scss';
import SubWrapper from './SubWrapper';

function QuestionInput(props) {
  return (
    <Wrapper>
      <SubWrapper className="Select-control">
        <Input {...props} />
      </SubWrapper>
    </Wrapper>
  );
}

QuestionInput.propTypes = {};

export default QuestionInput;
