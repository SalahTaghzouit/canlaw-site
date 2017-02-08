/**
 * CategorySearch
 */
import React from 'react';
import { Provider } from 'react-algoliasearch-helper';
import { FormattedMessage } from 'react-intl';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import TypeWriter from 'react-typewriter';
import isEmpty from 'lodash/isEmpty';
import stripTags from 'striptags';
import env from 'canlaw-components/utils/env';
import SearchBox from '../../components/SearchBox';
import Header from '../../components/Header';
import Hits from '../Hits';
import './style.scss';
import Wrapper from './Wrapper';
import HintColumn from './HintColumn';
import SearchColumn from './SearchColumn';
import messages from './messages';

const client = algoliasearch(env.algoliaAppId, env.algoliaApiKey);
const helper = algoliasearchHelper(client, env.algoliaCategoryIndex, {
  attributesToHighlight: 'term',
  highlightPreTag: '<span class="highlight-hit">',
  highlightPostTag: '</span>',
});

class CategorySearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentExampleIndex: 0,
      typeWriterIsRunning: !isEmpty(props.exampleQuestions),
      typingDirection: 1,
      showHits: false,
      category: '',
    };

    this.nextTyping = this.nextTyping.bind(this);
    this.erase = this.erase.bind(this);
    this.type = this.type.bind(this);
    this.onClickHit = this.onClickHit.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialText) {
      this.setState({
        ...this.state,
        showHits: false,
        typeWriterIsRunning: false,
        category: this.props.initialText,
      });
    }
  }

  onChangeSearchBox(text) {
    this.setState({
      ...this.state,
      showHits: true,
      category: text || '',
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  onClickHit(hit) {
    const category = stripTags(hit._highlightResult.term.value); // eslint-disable-line no-underscore-dangle
    this.setState({
      ...this.state,
      showHits: false,
      category,
    });
    this.props.onChoseCategory(hit);
  }

  nextTyping() {
    if (this.state.typingDirection === 1) {
      setTimeout(this.erase, 1000);
    } else {
      this.type();
    }
  }

  type() {
    const currentExampleIndex = this.state.currentExampleIndex + 1 < this.props.exampleQuestions.length ?
      this.state.currentExampleIndex + 1 :
      0;

    this.setState({
      ...this.state,
      typingDirection: 1,
      currentExampleIndex,
    });
  }

  erase() {
    this.setState({
      ...this.state,
      typingDirection: -1,
    });
  }

  render() {
    const othersCategory = {
      objectID: 'others',
      id: 'others',
      name: 'others',
      human: 'Others',
      term: 'Others',
      _highlightResult: {
        term: {
          value: 'Others',
        },
      },
    };

    return (
      <Provider helper={helper}>
        <Header>
          <Wrapper onClick={() => this.setState({ ...this.state, typeWriterIsRunning: false })}>

            <HintColumn fluid md={4}>
              <FormattedMessage {...messages.startTyping} />
            </HintColumn>
            <SearchColumn fluid md={8}>
              {this.state.typeWriterIsRunning && <TypeWriter
                maxDelay={50}
                minDelay={5}
                onTypingEnd={this.nextTyping}
                typing={this.state.typingDirection}
              >
                {this.props.exampleQuestions[this.state.currentExampleIndex]}
              </TypeWriter>}

              {!this.state.typeWriterIsRunning &&
              <SearchBox
                initialText={this.props.initialText || ''}
                value={this.state.category || ''}
                onChange={this.onChangeSearchBox}
              />}

              {!this.state.typeWriterIsRunning && this.state.showHits &&
              <Hits
                othersCategory={othersCategory}
                visible={this.state.showHits}
                onClick={this.onClickHit}
              />}
            </SearchColumn>

          </Wrapper>
        </Header>
      </Provider>
    );
  }
}

CategorySearch.propTypes = {
  onChoseCategory: React.PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  onChange: React.PropTypes.func,
  initialText: React.PropTypes.string,
  exampleQuestions: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default CategorySearch;
