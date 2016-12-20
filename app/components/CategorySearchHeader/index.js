/**
 *
 * CategorySearch
 *
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-algoliasearch-helper';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import env from '../../utils/env';
import SearchBox from '../../components/SearchBox';
import Hits from '../../components/Hits';
import Header from '../../components/Header';

const client = algoliasearch(env.algoliaAppId, env.algoliaApiKey);
const helper = algoliasearchHelper(client, env.algoliaCategoryIndex);

function CategorySearch({ onChange, onChoseCategory, initialText, hideHits }) {
  return (
    <Provider helper={helper}>
      <Header>
        <SearchBox initialText={initialText} onChange={onChange} />
        {hideHits && <Hits onClick={onChoseCategory} />}
      </Header>
    </Provider>
  );
}

CategorySearch.propTypes = {
  hideHits: PropTypes.bool,
  onChoseCategory: PropTypes.func,
  onChange: PropTypes.func,
  initialText: PropTypes.string,
};

export default CategorySearch;
