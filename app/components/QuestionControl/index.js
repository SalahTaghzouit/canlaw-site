import React from 'react';
import Input from 'canlaw-components/components/Input';
import Control from './Control';
import Select from '../Select';

class QuestionControl extends React.PureComponent {

  componentWillMount() {
    if (!this.props.value) {
      this.props.onChange(this.props.question, this.props.defaultValue || '');
    }
  }

  fixOptions(options) {
    return options.map((option) => ({ value: option, label: option }));
  }

  render() {
    let component;

    if (this.props.type === 'text' || this.props.type === 'number') {
      component = (
        <Input
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title}
          value={this.props.value || ''}
          onChange={(evt) => this.props.onChange(this.props.question, evt.target.value)}
        />
      );
    } else if (this.props.type === 'select' || this.props.type === 'select_many') {
      const many = this.props.type === 'select_many';
      component = (
        <Select
          options={this.fixOptions(this.props.options)}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title}
          value={this.props.value || ''}
          name="Some name"
          multi={many}
          onChange={(evt) => this.props.onChange(this.props.question, many ? evt : evt.value)}
        />
      );
    } else if (this.props.type === 'select_many') {
      component = (
        <div>
          {/* <MultiSelect*/}
          {/* type={this.props.type || 'text'}*/ }
          {/* placeholder={this.props.placeholder && this.props.placeholder}*/ }
          {/* required={this.props.required}*/ }
          {/* disabled={this.props.disabled}*/ }
          {/* title={this.props.title}*/ }
          {/* value={this.props.value || ''}*/ }
          {/* onChange={(evt) => this.props.onChange(this.props.question, evt.target.value)}*/ }
          {/* />*/}
        </div>
      );
    }


    return (
      <Control label={this.props.question}>
        {component}
      </Control>
    );
  }
}

QuestionControl.propTypes = {
  question: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  title: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  options: React.PropTypes.array,
};

export default QuestionControl;
