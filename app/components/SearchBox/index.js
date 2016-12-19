/**
 *
 * SearchBox
 *
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function SearchBox({ helper }) {
  return (
    <input
      placeholder={<FormattedMessage {...messages.pleaceholder} />}
      autoFocus
      onChange={(e) => helper.setQuery(e.target.value).search()}
    />
  );
}

SearchBox.propTypes = {
  helper: React.PropTypes.object,
};

export default connect()(SearchBox);
