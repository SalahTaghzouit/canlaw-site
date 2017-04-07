/**
 * NavData contains the navigation menu items
 */
import A from 'canlaw-components/components/Navigation/A';
import Nav from 'canlaw-components/components/Navigation/Nav';
import NavItem from 'canlaw-components/components/Navigation/NavItem';
import LogoutButton from 'canlaw-components/containers/LogoutButton';
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { FormattedMessage } from 'react-intl';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import messages from './messages';

function NavData({ blogUrl, dashboardUrl, loginUrl, registerUrl, isAuthenticated }) {
  // TODO: Ugly hack because of the very bad react-bootstrap component. We should get rid of it asap
  const allowDefault = (eventKey) => {
    let location;
    switch (eventKey) {
      case 200:
        location = blogUrl;
        break;
      case 201:
        location = dashboardUrl;
        break;
      case 203:
        location = loginUrl;
        break;
      case 204:
        location = registerUrl;
        break;
      default:
        location = '';
    }
    window.location.href = location;
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
        <LinkContainer to="/about">
          <NavItem
            componentClass={A}
            eventKey={333}
          >
            <FormattedMessage {...messages.aboutUs} />
          </NavItem>
        </LinkContainer>
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
