/**
 * NavData contains the navigation menu items
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavItem from 'canlaw-components/components/Navigation/NavItem';
import A from 'canlaw-components/components/Navigation/A';
import Nav from 'canlaw-components/components/Navigation/Nav';
import messages from './messages';

function NavData({ blogUrl, dashboardUrl, loginUrl, registerUrl, isAuthenticated }) {
  return (
    <div>
      <Nav className="navbar-nav">
        <NavItem href={blogUrl} componentClass={A} eventKey={1}>
          <FormattedMessage {...messages.community} />
        </NavItem>
      </Nav>
      <Nav className="navbar-nav" pullRight>
        {isAuthenticated &&
        <NavItem href={dashboardUrl} componentClass={A} eventKey={2}>
          <FormattedMessage {...messages.openDashboard} />
        </NavItem>
        }

        {!isAuthenticated &&
        <NavItem href={loginUrl} componentClass={A} eventKey={3}>
          <FormattedMessage {...messages.login} />
        </NavItem>
        }

        {!isAuthenticated &&
        <NavItem href={registerUrl} componentClass={A} eventKey={4}>
          <FormattedMessage {...messages.openAccount} />
        </NavItem>
        }
      </Nav>
    </div>
  );
}

NavData.propTypes = {
  blogUrl: React.PropTypes.string,
  dashboardUrl: React.PropTypes.string,
  loginUrl: React.PropTypes.string,
  registerUrl: React.PropTypes.string,
  isAuthenticated: React.PropTypes.bool,
};

export default NavData;
