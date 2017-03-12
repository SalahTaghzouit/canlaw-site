/**
 * Hits
 */
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import React from 'react';
import { connect as connectAlgolia } from 'react-algoliasearch-helper';
import Button from './Button';
import Li from './Li';
import LoadingIndicator from './LoadingIndicator';
import Ul from './Ul';

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
class Hits extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
    };

    this.hits = {};
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('keydown', this.onKeyPressed);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.onKeyPressed);
  }


  onKeyPressed(evt) {
    const inputValue = evt.which;
    if (inputValue !== 38 && inputValue !== 40 && inputValue !== 13) {
      return;
    }

    event.preventDefault();

    const hits = get(this.props.results, 'hits', []);
    let position = findIndex(hits, { objectID: this.state.selectedId });

    if (inputValue === 40 && position < hits.length - 1) {
      position += 1;
    }
    if (inputValue === 38 && position > 0) {
      position -= 1;
    }

    const element = hits[position];

    if (inputValue === 13) {
      if (element) {
        this.props.onClick(element);
      }

      return;
    }


    if (element && this.hits[element.objectID]) {
      this.setState({
        selectedId: element.objectID,
      });
      this.hits[element.objectID].focus();
    }
  }

  render() {
    if (this.props.noResults) {
      return (<div />);
    }

    if (!this.props.results) {
      return (
        <Ul visible>
          <Li>
            <LoadingIndicator />
          </Li>
        </Ul>
      );
    }

    return (
      <Ul visible={this.props.visible}>
        {this.props.results.hits.map(
          (hit) => (
            <Li
              active={this.state.selectedId === hit.objectID}
              innerRef={(ref) => (this.hits[hit.objectID] = ref)}
              key={hit.objectID}
            >
              <Button
                onClick={() => this.props.onClick(hit)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: hit.human, // eslint-disable-line no-underscore-dangle
                }}
              />
            </Li>
          ),
        )}

        {!this.props.results.hits.length &&
        <Li key={this.props.othersCategory.id}>
          <Button
            onClick={() => this.props.onClick(this.props.othersCategory)}
          >
            {this.props.othersCategory.human}
          </Button>
        </Li>
        }
      </Ul>
    );
  }
}

Hits.propTypes = {
  results: React.PropTypes.object,
  onClick: React.PropTypes.func,
  visible: React.PropTypes.bool,
  othersCategory: React.PropTypes.object.isRequired,
  noResults: React.PropTypes.bool,
};

Hits.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  results: state.searchResults,
  onClick: ownProps.onClick,
});

export default connectAlgolia(mapStateToProps)(Hits);

