/**
 *
 * Hits
 */
import React from 'react';
import { connect as connectAlgolia } from 'react-algoliasearch-helper';
import Ul from './Ul';
import Li from './Li';

const Hits = ({ results, onClick, visible }) => {
  if (!results) return <div />;
  return (
    <Ul visible={visible}>
      {results.hits.map(
        (hit) => (
          <Li key={hit.objectID}>
            <button
              onClick={() => onClick(hit)}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: hit._highlightResult.term.value, // eslint-disable-line no-underscore-dangle
              }}
            />
          </Li>
        )
      )}
    </Ul>
  );
};

Hits.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func,
  visible: React.PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  results: state.searchResults,
  onClick: ownProps.onClick,
});

export default connectAlgolia(mapStateToProps)(Hits);

