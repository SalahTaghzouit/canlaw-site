/**
 * CategorySearch
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-algoliasearch-helper';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import TypeWriter from 'react-typewriter';
import isEmpty from 'lodash/isEmpty';
import env from '../../utils/env';
import SearchBox from '../../components/SearchBox';
import Header from '../../components/Header';
import Hits from '../Hits';

const client = algoliasearch(env.algoliaAppId, env.algoliaApiKey);
const helper = algoliasearchHelper(client, env.algoliaCategoryIndex);
class CategorySearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentExampleIndex: 0,
      typeWriterIsRunning: !isEmpty(props.exampleQuestions),
      typingDirection: 1,
    };
  }

  componentDidMount() {
    this.nextTyping = this.nextTyping.bind(this);
    this.erase = this.erase.bind(this);
    this.type = this.type.bind(this);
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
    return (
      <Provider helper={helper}>
        <Header>
          Start typing:
          {this.state.typeWriterIsRunning && <TypeWriter
            onClick={() => this.setState({ ...this.state, typeWriterIsRunning: false })}
            maxDelay={50}
            minDelay={5}
            onTypingEnd={this.nextTyping}
            typing={this.state.typingDirection}
          >
            {this.props.exampleQuestions[this.state.currentExampleIndex]}
          </TypeWriter>}

          {!this.state.typeWriterIsRunning &&
          <SearchBox initialText={this.props.initialText} onChange={this.props.onChange} />}

          {!this.state.typeWriterIsRunning && this.props.showHits &&
          <Hits onClick={this.props.onChoseCategory} />}

        </Header>
      </Provider>
    );
  }
}

CategorySearch.propTypes = {
  showHits: PropTypes.bool,
  onChoseCategory: PropTypes.func,
  onChange: PropTypes.func,
  initialText: PropTypes.string,
  exampleQuestions: PropTypes.arrayOf(PropTypes.string),
};

export default CategorySearch;
