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
import HowItWorks from '../../components/HowItWorks';
import ThreeCharacteristics from '../../components/ThreeCharacteristics';
import Reasons from '../../components/Reasons';
// import Testimonials from '../../components/Testimonials';
// import Awards from '../../components/Awards';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <CategorySearchHeader
          exampleQuestions={[
            'Divorce procedure',
            'Freelancer contract',
            'Tenancy agreement',
            'Car accident claim',
            'Child custody',
            'I want to buy a house',
          ]}
          onChoseCategory={this.props.onClick}
        />

        <Container>

          <HowItWorks />

          <ThreeCharacteristics />

          <Reasons />

          {/* <Testimonials />*/}

          {/* <Awards />*/}

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

