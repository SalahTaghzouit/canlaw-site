import React, { PropTypes } from 'react';
import Label from './Label';
import Input from './Input';

function Control(props) {
  return (
    <div>
      <Label>{props.question}</Label>
      <Input
        type={props.type || 'text'}
        placeholder={props.placeholder && props.placeholder}
        required={props.required}
        disabled={props.disabled}
        title={props.title}
        value={props.value || (props.defaultValue && props.onChange(props.question, props.defaultValue)) || ''}
        onChange={(evt) => props.onChange(props.question, evt.target.value)}
      />
    </div>
  );
}

Control.propTypes = {
  question: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Control;
