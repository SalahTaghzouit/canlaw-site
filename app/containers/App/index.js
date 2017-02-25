/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Theme from 'canlaw-components/components/Theme';
import Footer from 'canlaw-components/components/Footer';
import Loader from 'canlaw-components/components/Loader';
import Container from 'canlaw-components/components/Container';
import Navigation from 'canlaw-components/components/Navigation';
import { makeSelectIsAuthenticated } from 'canlaw-components/containers/UserProvider/selectors';
import NavData from '../../components/NavData';
import {
  makeSelectLoading,
  makeSelectBlogUrl,
  makeSelectDashboardUrl,
  makeSelectLoginUrl,
  makeSelectRegisterUrl,
  makeSelectAppUrl,
} from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Theme>
        <Helmet
          title="CanLaw - Find Lawyers in Malaysia"
          meta={[
            { name: 'description', content: "Looking for a lawyer in Malaysia but you don't know where to begin? Are you a lawyer keen on being discovered by new clients? Try #CanLaw!" },
          ]}
        />

        <Loader show={this.props.loading} />

        <Navigation home={this.props.appUrl}>
          <NavData
            isAuthenticated={this.props.isAuthenticated}
            blogUrl={this.props.blogUrl}
            dashboardUrl={this.props.dashboardUrl}
            loginUrl={this.props.loginUrl}
            registerUrl={this.props.registerUrl}
          />
        </Navigation>

        <Container>
          {React.Children.toArray(this.props.children)}
        </Container>

        <Footer
          terms={`${this.props.appUrl}/terms`}
          privacy={`${this.props.appUrl}/terms/privacy-policy`}
          compliance={`${this.props.appUrl}/terms/compliance`}
          homeUrl={this.props.appUrl}
        />
      </Theme>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
  blogUrl: React.PropTypes.string,
  dashboardUrl: React.PropTypes.string,
  loginUrl: React.PropTypes.string,
  registerUrl: React.PropTypes.string,
  isAuthenticated: React.PropTypes.bool.isRequired,
  appUrl: React.PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  blogUrl: makeSelectBlogUrl(),
  dashboardUrl: makeSelectDashboardUrl(),
  loginUrl: makeSelectLoginUrl(),
  registerUrl: makeSelectRegisterUrl(),
  isAuthenticated: makeSelectIsAuthenticated(),
  appUrl: makeSelectAppUrl(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
