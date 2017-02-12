/**
 * QuestionInput
 */
import React from 'react';
import omit from 'lodash/omit';
import Wrapper from './Wrapper';
import Input from './Input';
import '../Select/scss/default.scss';
import SubWrapper from './SubWrapper';

function QuestionInput(props) {
  return (
    <Wrapper>
      <SubWrapper hasErrors={props.hasErrors} className="Select-control">
        <Input {...omit(props, 'hasErrors')} />
      </SubWrapper>
    </Wrapper>
  );
}

QuestionInput.propTypes = {
  hasErrors: React.PropTypes.bool,
};

export default QuestionInput;
