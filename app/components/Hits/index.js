/**
 *
 * Hits
 *
 */
import React from 'react';
import { connect as connectAlgolia } from 'react-algoliasearch-helper';


const Hits = ({ results, onClick }) => {
  if (!results) return <div />;
  return (
    <ul>
      {results.hits.map(
        (hit) => (
          <li key={hit.objectID}>
            <button onClick={onClick}>{hit.term}</button>
          </li>
        )
      )}
    </ul>
  );
};

Hits.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  results: state.searchResults,
  onClick: ownProps.onClick,
});

export default connectAlgolia(mapStateToProps)(Hits);

