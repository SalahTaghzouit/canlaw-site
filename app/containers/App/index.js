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
import Navigation from 'canlaw-components/components/Navigation';
import NavData from '../../components/NavData';
import { makeSelectIsAuthenticated } from '../Identity/selectors';
import {
  makeSelectLoading,
  makeSelectBlogUrl,
  makeSelectDashboardUrl,
  makeSelectLoginUrl,
  makeSelectRegisterUrl,
} from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Theme>
        <Helmet
          title="Canlaw"
          meta={[
            { name: 'description', content: 'Find lawyers and get quotes in Malaysia, quick and easy.' },
          ]}
        />

        <Loader show={this.props.loading} />

        <Navigation>
          <NavData
            blogUrl={this.props.blogUrl}
            dashboardUrl={this.props.dashboardUrl}
            loginUrl={this.props.loginUrl}
            registerUrl={this.props.registerUrl}
          />
        </Navigation>

        {React.Children.toArray(this.props.children)}

        <Footer />
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
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  blogUrl: makeSelectBlogUrl(),
  dashboardUrl: makeSelectDashboardUrl(),
  loginUrl: makeSelectLoginUrl(),
  registerUrl: makeSelectRegisterUrl(),
  isAuthenticated: makeSelectIsAuthenticated(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
