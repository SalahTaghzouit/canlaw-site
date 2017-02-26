/**
 * NavData contains the navigation menu items
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavItem from 'canlaw-components/components/Navigation/NavItem';
import LogoutButton from 'canlaw-components/containers/LogoutButton';
import Navbar from 'react-bootstrap/lib/Navbar';
import A from 'canlaw-components/components/Navigation/A';
import Nav from 'canlaw-components/components/Navigation/Nav';
import messages from './messages';

function NavData({ blogUrl, dashboardUrl, loginUrl, registerUrl, isAuthenticated }) {
  const allowDefault = (e) => {
    e.allowDefault = true; // eslint-disable-line no-param-reassign
  };

  return (
    <div>
      <Nav className="navbar-nav">
        <NavItem
          onSelect={allowDefault}
          href={blogUrl}
          componentClass={A}
          eventKey={200}
        >
          <FormattedMessage {...messages.community} />
        </NavItem>
      </Nav>
      <Nav className="navbar-nav" pullRight>
        {isAuthenticated &&
        <NavItem onSelect={allowDefault} href={dashboardUrl} componentClass={A} eventKey={201}>
          <FormattedMessage {...messages.openDashboard} />
        </NavItem>
        }

        {isAuthenticated &&
        <Navbar.Text>
          <LogoutButton />
        </Navbar.Text>
        }

        {!isAuthenticated &&
        <NavItem onSelect={allowDefault} href={loginUrl} componentClass={A} eventKey={203}>
          <FormattedMessage {...messages.login} />
        </NavItem>
        }

        {!isAuthenticated &&
        <NavItem onSelect={allowDefault} href={registerUrl} componentClass={A} eventKey={204}>
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
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default NavData;
