import React from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import isBoolean from 'lodash/isBoolean';
import difference from 'lodash/difference';
import SingleDatePicker from '../SingleDatePicker';
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
      options: [],
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
    if (!this.value) {
      this.props.onChange(this.props.label, '', this.props.question);
    }

    this.setState({
      ...this.state,
      options: this.props.options,
    });

    this.value = this.props.value ? this.props.value.answer : this.props.value;
  }

  componentWillReceiveProps(nextProps) {
    this.value = nextProps.value ? nextProps.value.answer : nextProps.value;
  }

  hasOther() {
    return this.props.question &&
      Array.isArray(this.props.question.options) &&
      this.props.question.options.indexOf('other') !== -1;
  }

  fixOptions(options) {
    return options.map((option) => ({ value: option, label: option })).sort();
  }

  handleSelect(evt) {
    const many = this.props.type === 'select_many';

    if (evt.value === this.props.othersText) {
      this.setState({
        ...this.state,
        othersSelected: true,
      });
      this.props.onChange(this.props.label, '', this.props.question);
      return;
    }

    this.setState({
      ...this.state,
      othersSelected: false,
      pristine: false,
    });

    const value = many ? evt.map((one) => one.value) : evt.value;
    const diff = difference(value, this.props.options);
    if (many &&
      this.props.options.indexOf(this.props.othersText) !== -1 &&
      diff.length
    ) {
      this.setState({
        ...this.state,
        options: this.state.options.concat(diff),
      });
    }

    this.props.onChange(this.props.label, value, this.props.question);
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
      this.props.onChange(this.props.label, this.state.selectText, this.props.question);
    }
  }

  selectPlaceholder() {
    if (this.state.othersSelected && this.state.selectText === '') {
      return 'Please specify';
    }

    return this.props.placeholder && this.props.placeholder;
  }

  shouldShowText() {
    return this.props.type === 'text' || this.props.type === 'number';
  }

  shouldShowErrors() {
    return isBoolean(this.props.showErrors) ? this.props.showErrors : true;
  }

  hasErrorsAndShouldShowThem() {
    return this.shouldShowErrors() && Array.isArray(this.props.errors) && !isEmpty(this.props.errors);
  }

  render() {
    let component;

    if (this.shouldShowText()) {
      component = (
        <QuestionInput
          hasErrors={this.hasErrorsAndShouldShowThem()}
          ref={(ref) => (this.input = ref)}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder && this.props.placeholder}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title || this.props.label}
          value={this.value || ''}
          onChange={(evt) => this.props.onChange(this.props.label, evt.target.value, this.props.question)}
        />
      );
    } else if (this.shouldShowSelect()) {
      const many = this.props.type === 'select_many';
      component = (
        <Select
          className={this.hasErrorsAndShouldShowThem() ? 'Section-control-danger' : ''}
          hasErrors={this.hasErrorsAndShouldShowThem()}
          options={this.fixOptions(this.state.options)}
          placeholder={this.selectPlaceholder()}
          required={this.props.required}
          disabled={this.props.disabled}
          title={this.props.title || this.props.label}
          value={this.value || ''}
          name={this.props.label}
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
      const date = moment(this.value).isValid() ? moment(this.value) : null;
      component = (
        <SingleDatePicker
          inputClassName={this.hasErrorsAndShouldShowThem() ? 'Section-control-danger' : ''}
          hasErrors={this.hasErrorsAndShouldShowThem()}
          id={this.props.label}
          enableOutsideDays
          isOutsideRange={() => false}
          date={date}
          startDate={moment('1920-01-01')}
          numberOfMonths={1}
          focused={this.state.focused}
          displayFormat="LL"
          onDateChange={(d) => this.props.onChange(this.props.label, d.format('LL'), this.props.question)}
          onFocusChange={({ focused }) => {
            this.setState({ focused });
          }}
        />
      );
    }
    return (
      <Control label={this.props.label} errors={this.shouldShowErrors() ? this.props.errors : []}>
        {component}
      </Control>
    );
  }
}

QuestionControl.propTypes = {
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  required: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  title: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  othersText: React.PropTypes.string,
  question: React.PropTypes.object,
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  options: React.PropTypes.array,
  errors: React.PropTypes.array,
  showErrors: React.PropTypes.bool,
};

export default QuestionControl;
