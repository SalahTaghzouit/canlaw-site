/**
 *
 * Hits
 */
import React from 'react';
import { connect as connectAlgolia } from 'react-algoliasearch-helper';
import Ul from './Ul';
import Li from './Li';

const Hits = ({ results, onClick, visible, othersCategory }) => {
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
      <Li key={othersCategory.id}>
        <button
          onClick={() => onClick(othersCategory)}
        >
          {othersCategory.human}
        </button>
      </Li>
    </Ul>
  );
};

Hits.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func,
  visible: React.PropTypes.bool,
  othersCategory: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  results: state.searchResults,
  onClick: ownProps.onClick,
});

export default connectAlgolia(mapStateToProps)(Hits);

