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
    this.props.helper
      .setQuery(e.target.value)
      .search();
  }

  render() {
    return (
      <Input
        value={this.props.value}
        autoFocus
        defaultValue={this.props.initialText}
        onChange={this.onChangeInput}
      />
    );
  }
}


SearchBox.propTypes = {
  helper: React.PropTypes.object.isRequired,
  initialText: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default connect()(SearchBox);
