/**
 *
 * SearchBox
 *
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';
import { injectIntl } from 'react-intl';
import messages from './messages';

export function SearchBox({ helper, initialText, intl }) {
  return (
    <input
      placeholder={intl.formatMessage({ ...messages.pleaceholder })}
      autoFocus
      defaultValue={initialText}
      onChange={(e) => helper.setQuery(e.target.value).search()}
    />
  );
}

SearchBox.propTypes = {
  helper: React.PropTypes.object.isRequired,
  initialText: React.PropTypes.string,
  intl: React.PropTypes.object.isRequired,
};

export default connect()(injectIntl(SearchBox));
