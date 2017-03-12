/**
 * CategorySearch
 */
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import env from 'canlaw-components/utils/env';
import { Column } from 'hedron';
import React from 'react';
import { Provider } from 'react-algoliasearch-helper';
import stripTags from 'striptags';
import Header from '../../components/Header';
import Hits from '../Hits';
import SearchBox from '../SearchBox';
import Hint from './Hint';
import Hints from './Hints';
import I from './I';
import SearchColumn from './SearchColumn';
import SearchWrapper from './SearchWrapper';
import './style.scss';
import Wrapper from './Wrapper';
import SearchRow from './SearchRow';

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
      typeWriterIsRunning: false,
      typingDirection: 1,
      showHits: false,
      searchFocused: false,
      category: '',
      maxDelay: 100,
      minDelay: 50,
    };

    this.nextTyping = this.nextTyping.bind(this);
    this.erase = this.erase.bind(this);
    this.type = this.type.bind(this);
    this.onChoseCategory = this.onChoseCategory.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
    this.blurredSearch = this.blurredSearch.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('click', this.blurredSearch);
    window.document.addEventListener('keydown', this.handleEscape);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.category) {
      return;
    }

    if (this.props.category || this.props.category.id !== nextProps.category.id) {
      this.setState({
        showHits: false,
        typeWriterIsRunning: false,
        category: nextProps.category.human,
        searchFocused: false,
      });
    }
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.blurredSearch);
    window.document.removeEventListener('keydown', this.handleEscape);
  }

  onChangeSearchBox(text) {
    this.setState({
      showHits: true,
      searchFocused: true,
      category: text || '',
    });

    if (this.props.onChange) {
      this.props.onChange(text);
    }
  }

  onChoseCategory(hit) {
    // const category = stripTags(hit._highlightResult.term.value); // eslint-disable-line no-underscore-dangle
    const category = stripTags(hit.human); // eslint-disable-line no-underscore-dangle

    this.setState({
      showHits: false,
      category,
    });

    this.props.onChoseCategory(hit);
  }

  getSearchBoxValue() {
    return this.state.category || '';
  }

  handleEscape(evt) {
    if (evt.keyCode === 27) {
      this.setState({
        searchFocused: false,
        showHits: false,
        category: '',
      });
    }
  }

  blurredSearch(evt) {
    if (this.area && !this.area.contains(evt.target)) {
      this.setState({
        searchFocused: false,
        showHits: false,
      });
    }
  }

  shouldShowHits() {
    return !this.state.typeWriterIsRunning && this.state.showHits && this.state.searchFocused;
  }

  nextTyping() {
    if (this.state.typingDirection === 1) {
      this.setState({
        maxDelay: 40,
        minDelay: 5,
      });
      setTimeout(this.erase, 1000);
    } else {
      this.setState({
        maxDelay: 100,
        minDelay: 50,
      });
      setTimeout(this.type, 100);
    }
  }

  type() {
    const currentExampleIndex = this.state.currentExampleIndex + 1 < this.props.exampleQuestions.length ?
      this.state.currentExampleIndex + 1 :
      0;

    this.setState({
      typingDirection: 1,
      currentExampleIndex,
    });
  }

  erase() {
    this.setState({
      typingDirection: -1,
    });
  }

  render() {
    const othersCategory = {
      objectID: 'others',
      id: 'others',
      name: 'others',
      human: 'I can\'t find what I\'m looking for',
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
          <SearchWrapper innerRef={(ref) => (this.area = ref)}>

            <Wrapper
              onClick={() => {
                this.setState({
                  typeWriterIsRunning: false,
                });
              }}
            >

              <SearchColumn>

                <SearchRow>
                  <Column fluid xs={10} md={11}>
                    <SearchBox
                      id="typewriter"
                      onFocus={() => this.setState({
                        searchFocused: true,
                      })}
                      value={this.getSearchBoxValue()}
                      onChange={this.onChangeSearchBox}
                    /></Column>
                  <Column fluid xs={2} md={1}>
                    <Hint><I className="fa fa-search" /></Hint>
                  </Column>
                </SearchRow>

                {this.shouldShowHits() &&
                <Hits
                  noResults={this.state.category.length < 2}
                  othersCategory={othersCategory}
                  visible={this.state.showHits}
                  onClick={this.onChoseCategory}
                />}
              </SearchColumn>

              <Hints
                exampleQuestions={this.props.exampleQuestions}
                onClickExample={this.onChangeSearchBox}
              />

            </Wrapper>
          </SearchWrapper>

        </Header>
      </Provider>
    );
  }
}

CategorySearch.propTypes = {
  onChoseCategory: React.PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  onChange: React.PropTypes.func,
  category: React.PropTypes.object,
  exampleQuestions: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
};

export default CategorySearch;
