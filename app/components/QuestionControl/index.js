import React from 'react';
import moment from 'moment';
import SingleDatePicker from '../SingleDatePicker';
import Control from './Control';
import Select from '../Select';
import QuestionInput from '../QuestionInput';

class QuestionControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    if (!this.props.value) {
      this.props.onChange(this.props.question, this.props.defaultValue || '');
    }
  }

  fixOptions(options) {
    return options.map((option) => ({ value: option, label: option }));
  }

  handleSelect(evt) {
    const many = this.props.type === 'select_many';
    this.props.onChange(this.props.question, many ? evt.map((one) => one.value) : evt.value);
  }

  render() {
    let component;

    if (this.props.type === 'text' || this.props.type === 'number') {
      component = (
        <QuestionInput
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title || this.props.question}
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
          title={this.props.title || this.props.question}
          value={this.props.value || ''}
          name={this.props.question}
          multi={many}
          onChange={this.handleSelect}
        />
      );
    } else if (this.props.type === 'date') {
      const date = moment(this.props.value).isValid() ? moment(this.props.value) : moment();
      component = (
        <SingleDatePicker
          id={this.props.question}
          date={date}
          focused={this.state.focused}
          displayFormat="LL"
          onDateChange={(d) => this.props.onChange(this.props.question, d.format('LL'))}
          onFocusChange={({ focused }) => {
            this.setState({ focused });
          }}
        />
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
