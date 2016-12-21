import React, { PropTypes } from 'react';
import Label from './Label';
import Input from './Input';

class Control extends React.PureComponent {
  componentDidMount() {
    if (!this.props.value) {
      this.props.onChange(this.props.question, this.props.defaultValue || '');
    }
  }

  render() {
    return (
      <div>
        <Label>{this.props.question}</Label>
        <Input
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title}
          value={this.props.value || ''}
          onChange={(evt) => this.props.onChange(this.props.question, evt.target.value)}
        />
      </div>
    );
  }
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
