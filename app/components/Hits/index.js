/**
 *
 * Hits
 *
 */
import React from 'react';
import { connect } from 'react-algoliasearch-helper';


const Hits = ({ results }) => {
  if (!results) return <div />;
  return (
    <div>
      {results.hits.map(
        (hit) => (<div key={hit.objectID}>{hit.term}</div>)
      )}
    </div>
  );
};

Hits.propTypes = {
  results: React.PropTypes.object,
};

export default connect((state) => ({ results: state.searchResults }))(Hits);
