/**
 * SearchBox
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';
import { injectIntl } from 'react-intl';
import messages from './messages';

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
      <input
        value={this.props.value}
        placeholder={this.props.intl.formatMessage({ ...messages.pleaceholder })}
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
  intl: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default connect()(injectIntl(SearchBox));
