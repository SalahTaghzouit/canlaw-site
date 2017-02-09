import React from 'react';
import moment from 'moment';
import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker';
import Control from './Control';
import Select from '../Select';
import QuestionInput from '../QuestionInput';
import '../SingleDatePicker/scss/main.scss';

class QuestionControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      pristine: true,
      othersSelected: false,
      selectText: '',
    };
    this.hasOther = this.hasOther.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.isSelect = this.isSelect.bind(this);
    this.shouldShowSelect = this.shouldShowSelect.bind(this);
    this.handleSelectInputChange = this.handleSelectInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.selectPlaceholder = this.selectPlaceholder.bind(this);
    this.shouldShowText = this.shouldShowText.bind(this);
  }

  componentWillMount() {
    if (!this.props.value) {
      this.props.onChange(this.props.question, this.props.defaultValue || '');
    }
  }

  hasOther() {
    return this.props.originalQuestion &&
      Array.isArray(this.props.originalQuestion.options) &&
      this.props.originalQuestion.options.indexOf('other') !== -1;
  }

  fixOptions(options) {
    return options.map((option) => ({ value: option, label: option }));
  }

  handleSelect(evt) {
    if (evt.value === this.props.othersText) {
      this.setState({
        ...this.state,
        othersSelected: true,
      });
      this.props.onChange(this.props.question, '');
      return;
    }

    this.setState({
      ...this.state,
      othersSelected: false,
      pristine: false,
    });


    const many = this.props.type === 'select_many';
    this.props.onChange(this.props.question, many ? evt.map((one) => one.value) : evt.value);
  }

  isSelect() {
    return this.props.type === 'select' || this.props.type === 'select_many';
  }

  shouldShowSelect() {
    return this.isSelect();
  }

  handleSelectInputChange(text) {
    this.setState({
      ...this.state,
      selectText: text,
    });
  }

  handleBlur() {
    if (this.hasOther() && this.state.othersSelected) {
      this.props.onChange(this.props.question, this.state.selectText);
    }
  }

  selectPlaceholder() {
    if (this.state.othersSelected && this.state.selectText === '') {
      return 'Please specify';
    }

    return this.props.placeholder && this.props.placeholder;
  }

  shouldShowText() {
    // if (this.state.othersSelected) {
    //   return true;
    // }

    return this.props.type === 'text' || this.props.type === 'number';
  }

  render() {
    let component;

    if (this.shouldShowText()) {
      component = (
        <QuestionInput
          ref={(ref) => (this.input = ref)}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title || this.props.question}
          value={this.props.value || ''}
          onChange={(evt) => this.props.onChange(this.props.question, evt.target.value)}
        />
      );
    } else if (this.shouldShowSelect()) {
      const many = this.props.type === 'select_many';
      component = (
        <Select
          options={this.fixOptions(this.props.options)}
          placeholder={this.selectPlaceholder()}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title || this.props.question}
          value={this.props.value || ''}
          name={this.props.question}
          multi={many}
          openOnFocus
          onChange={this.handleSelect}
          onBlurResetsInput={!this.hasOther()}
          onBlur={this.handleBlur}
          noResultsText={this.hasOther() ? false : undefined}
          onInputChange={this.handleSelectInputChange}
        />
      );
    } else if (this.props.type === 'date') {
      const date = moment(this.props.value).isValid() ? moment(this.props.value) : null;
      component = (
        <SingleDatePicker
          id={this.props.question}
          enableOutsideDays
          isOutsideRange={() => false}
          date={date}
          startDate={moment('1920-01-01')}
          numberOfMonths={1}
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
  othersText: React.PropTypes.string,
  originalQuestion: React.PropTypes.object,
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
