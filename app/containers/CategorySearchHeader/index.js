/**
 *
 * CategorySearch
 *
 */
import React from 'react';
import { Provider } from 'react-algoliasearch-helper';
import { connect } from 'react-redux';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import { createSelector } from 'reselect';
import env from '../../utils/env';
import SearchBox from '../../components/SearchBox';
import Hits from '../../components/Hits';
import Header from '../../components/Header';
import { chooseCategory } from './actions';
import { makeSelectCategory } from './selectors';

const client = algoliasearch(env.algoliaAppId, env.algoliaApiKey);
const helper = algoliasearchHelper(client, env.algoliaCategoryIndex);

class CategorySearch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.category) {
      this.props.onClick(this.props.category);
    }
  }

  render() {
    return (
      <Provider helper={helper}>
        <Header>
          <SearchBox />
          <Hits onClick={this.props.onClick} />
        </Header>
      </Provider>
    );
  }
}

CategorySearch.propTypes = {
  onClick: React.PropTypes.func,
  category: React.PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectCategory()
);

export function mapDispatchToProps(dispatch) {
  return {
    onClick: (evt) => dispatch(chooseCategory(evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearch);
