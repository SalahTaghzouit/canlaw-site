/**
 * CategorySearch
 */
import React from 'react';
import { Provider } from 'react-algoliasearch-helper';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import TypeWriter from 'react-typewriter';
import isEmpty from 'lodash/isEmpty';
import stripTags from 'striptags';
import env from 'canlaw-components/utils/env';
import SearchBox from '../../components/SearchBox';
import Header from '../../components/Header';
import TypewriterEffect from '../../components/TypewriterEffect';
import Hits from '../Hits';
import './style.scss';
import Wrapper from './Wrapper';
import SearchColumn from './SearchColumn';
import SearchWrapper from './SearchWrapper';

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
    this.keyPressed = this.keyPressed.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('click', this.blurredSearch);
    window.document.addEventListener('keypress', this.keyPressed);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.category) {
      return;
    }

    if (this.props.category || this.props.category.id !== nextProps.category.id) {
      this.setState({
        ...this.state,
        showHits: false,
        typeWriterIsRunning: false,
        category: nextProps.category.human,
        searchFocused: false,
      });
    }
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.blurredSearch);
    window.document.removeEventListener('keypress', this.keyPressed);
  }

  onChangeSearchBox(text) {
    this.setState({
      ...this.state,
      showHits: true,
      searchFocused: true,
      category: text || '',
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  onChoseCategory(hit) {
    // const category = stripTags(hit._highlightResult.term.value); // eslint-disable-line no-underscore-dangle
    const category = stripTags(hit.human); // eslint-disable-line no-underscore-dangle

    this.setState({
      ...this.state,
      showHits: false,
      category,
    });

    this.props.onChoseCategory(hit);
  }

  getSearchBoxValue() {
    return this.state.category || '';
  }

  keyPressed(evt) {
    const inputValue = evt.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue !== 32 && inputValue !== 0)) {
      event.preventDefault();
      return;
    }

    this.setState({
      ...this.state,
      searchFocused: false,
      typeWriterIsRunning: false,
      // category: evt.key,
    });

    window.document.removeEventListener('keypress', this.keyPressed);
  }

  blurredSearch(evt) {
    if (this.area && !this.area.contains(evt.target)) {
      this.setState({
        ...this.state,
        searchFocused: false,
      });
    }
  }

  nextTyping() {
    if (this.state.typingDirection === 1) {
      this.setState({
        ...this.state,
        maxDelay: 40,
        minDelay: 5,
      });
      setTimeout(this.erase, 1000);
    } else {
      this.setState({
        ...this.state,
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
      human: "I can't find what I'm looking for",
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
                  ...this.state,
                  typeWriterIsRunning: false,
                });
              }}
            >

              <SearchColumn>
                {this.state.typeWriterIsRunning && <TypeWriter
                  ref={(ref) => (this.typeWriter = ref)}
                  maxDelay={this.state.maxDelay}
                  minDelay={this.state.minDelay}
                  onTypingEnd={this.nextTyping}
                  typing={this.state.typingDirection}
                >
                  <TypewriterEffect>
                    {this.props.exampleQuestions[this.state.currentExampleIndex]}
                  </TypewriterEffect>
                </TypeWriter>}

                {!this.state.typeWriterIsRunning &&
                <SearchBox
                  id="typewriter"
                  onFocus={() => this.setState({
                    ...this.state,
                    searchFocused: true,
                  })}
                  value={this.getSearchBoxValue()}
                  onChange={this.onChangeSearchBox}
                />}

                {!this.state.typeWriterIsRunning && this.state.showHits && this.state.searchFocused &&
                <Hits
                  noResults={this.state.category.length < 2}
                  othersCategory={othersCategory}
                  visible={this.state.showHits}
                  onClick={this.onChoseCategory}
                />}
              </SearchColumn>


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
  exampleQuestions: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default CategorySearch;
