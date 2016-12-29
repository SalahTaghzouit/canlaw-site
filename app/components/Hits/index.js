/**
 *
 * Hits
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
            <button
              onClick={() => onClick(hit)}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: hit._highlightResult.term.value, // eslint-disable-line no-underscore-dangle
              }}
            />
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

