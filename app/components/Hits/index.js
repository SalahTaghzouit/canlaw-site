/**
 *
 * Hits
 */
import React from 'react';
import { connect as connectAlgolia } from 'react-algoliasearch-helper';
import LoadingIndicator from './LoadingIndicator';
import Ul from './Ul';
import Li from './Li';
import Button from './Button';

/**
 *
 *
 * @param results
 * @param onClick
 * @param visible
 * @param othersCategory
 * @param noResults This one is because algolia keeps the results of the previous query, so we give this explicitly to not show old results
 * @returns {XML}
 * @constructor
 */
const Hits = ({ results, onClick, visible, othersCategory, noResults }) => {
  if (noResults) {
    return (<div />);
  }

  if (!results) {
    return (
      <Ul visible>
        <Li>
          <LoadingIndicator />
        </Li>
      </Ul>
    );
  }

  return (
    <Ul visible={visible}>
      {results.hits.map(
        (hit) => (
          <Li key={hit.objectID}>
            <Button
              onClick={() => onClick(hit)}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: hit.human, // eslint-disable-line no-underscore-dangle
              }}
            />
          </Li>
        )
      )}

      {!results.hits.length &&
      <Li key={othersCategory.id}>
        <Button
          onClick={() => onClick(othersCategory)}
        >
          {othersCategory.human}
        </Button>
      </Li>
      }
    </Ul>
  );
};

Hits.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func,
  visible: React.PropTypes.bool,
  othersCategory: React.PropTypes.object.isRequired,
  noResults: React.PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  results: state.searchResults,
  onClick: ownProps.onClick,
});

export default connectAlgolia(mapStateToProps)(Hits);

