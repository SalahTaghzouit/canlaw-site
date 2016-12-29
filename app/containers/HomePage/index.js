/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { connect } from 'react-redux';
import Container from 'canlaw-components/components/Container';
import CategorySearchHeader from '../../components/CategorySearchHeader';
import { startQuoteRequest } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <CategorySearchHeader
          exampleQuestions={['this is a test', 'and this is another test']}
          onChoseCategory={this.props.onClick}
        />

        <Container>
          {/* Content */}
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  onClick: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (category) => dispatch(startQuoteRequest(category)),
});

export default connect(() => ({}), mapDispatchToProps)(HomePage);

