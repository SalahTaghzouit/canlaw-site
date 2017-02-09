/**
 * SearchBox
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';
import Input from './Input';

class SearchBox extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(e) {
    this.props.onChange(e.target.value);
    if (e.target.value.length > 1) {
      this.props.helper
        .setQuery(e.target.value)
        .search();
    }
  }

  render() {
    return (
      <Input
        value={this.props.value || ''}
        autoFocus
        defaultValue={this.props.initialText}
        onChange={this.onChangeInput}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      />
    );
  }
}


SearchBox.propTypes = {
  helper: React.PropTypes.object.isRequired,
  initialText: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
};

export default connect()(SearchBox);
