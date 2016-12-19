/**
 *
 * SearchBox
 *
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function SearchBox({ helper, initialText }) {
  return (
    <input
      placeholder={<FormattedMessage {...messages.pleaceholder} />}
      autoFocus
      value={initialText}
      onChange={(e) => helper.setQuery(e.target.value).search()}
    />
  );
}

SearchBox.propTypes = {
  helper: React.PropTypes.object,
  initialText: React.PropTypes.string,
};

export default connect()(SearchBox);
