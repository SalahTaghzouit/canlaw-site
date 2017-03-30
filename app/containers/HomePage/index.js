/*
 * HomePage
 */
import Container from 'canlaw-components/components/Container';
import smoothScroll from 'canlaw-components/utils/smoothscroll';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Awards from '../../components/Awards';
import CategorySearchHeader from '../../components/CategorySearchHeader';
import HowItWorks from '../../components/HowItWorks';
import Reasons from '../../components/Reasons';
import Testimonials from '../../components/Testimonials';
import { startQuoteRequest } from './actions';
import Button from './Button';
import messages from './messages';

class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.scrollToSearch = this.scrollToSearch.bind(this);
  }

  scrollToSearch() {
    smoothScroll(document.body, this.anchor.offsetTop - 70, 400);
  }

  render() {
    return (
      <div ref={(ref) => (this.anchor = ref)}>
        <CategorySearchHeader
          exampleQuestions={[
            'Divorce procedure',
            'Child custody',
            'Freelancer contract',
            'Tenancy agreement',
            'Car accident claim',
            'I want to buy a house',
          ]}
          onChoseCategory={this.props.onClick}
        />

        <Container>

          <HowItWorks />

          {/* <ThreeCharacteristics />*/}

          <Reasons />

          <Testimonials />

          <Awards />

          <Button onClick={this.scrollToSearch}>
            <FormattedMessage {...messages.start} />
          </Button>

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

