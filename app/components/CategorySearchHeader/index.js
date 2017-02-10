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
import TypewriterEffect from '../../components/TypewriterEffect';
import Hits from '../Hits';
import './style.scss';
import Wrapper from './Wrapper';
import HintColumn from './HintColumn';
import SearchColumn from './SearchColumn';
import messages from './messages';
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
    this.onClickHit = this.onClickHit.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
    this.blurredSearch = this.blurredSearch.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('click', this.blurredSearch);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialText) {
      this.setState({
        ...this.state,
        showHits: false,
        typeWriterIsRunning: false,
        category: this.props.initialText,
        searchFocused: false,
      });
    }
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.blurredSearch);
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

  onClickHit(hit) {
    // const category = stripTags(hit._highlightResult.term.value); // eslint-disable-line no-underscore-dangle
    const category = stripTags(hit.human); // eslint-disable-line no-underscore-dangle

    this.setState({
      ...this.state,
      showHits: false,
      category,
    });

    this.props.onChoseCategory(hit);
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

  blurredSearch(evt) {
    if (!this.area.contains(evt.target)) {
      this.setState({
        ...this.state,
        searchFocused: false,
      });
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
          <SearchWrapper ref={(ref) => (this.area = ref)}>

            <Wrapper
              onClick={() => {
                this.setState({
                  ...this.state,
                  typeWriterIsRunning: false,
                });
              }}
            >

              <HintColumn fluid md={4}>
                <FormattedMessage {...messages.startTyping} />
              </HintColumn>


              <SearchColumn fluid md={8}>
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
                  initialText={this.props.initialText || ''}
                  value={this.state.category || ''}
                  onChange={this.onChangeSearchBox}
                />}

                {!this.state.typeWriterIsRunning && this.state.showHits && this.state.searchFocused &&
                <Hits
                  othersCategory={othersCategory}
                  visible={this.state.showHits}
                  onClick={this.onClickHit}
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
  initialText: React.PropTypes.string,
  exampleQuestions: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default CategorySearch;
