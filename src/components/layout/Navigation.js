import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import FlatButton from 'material-ui/FlatButton';

const styles = {
  appBar: {
    flexWrap: 'wrap',
    boxShadow: 'none',
  },
  tabs: {
    width: '100%',
  },
};

function LoginButton(props) {
  return (
    <FlatButton
      {...props}
      label="Login"
      containerElement={<Link to="/login" />}
    />
  );
}

LoginButton.muiName = 'FlatButton';

function Logged({
  onLogout,
  ...props,
}) {
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MenuIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onClick={onLogout} />
    </IconMenu>
  );
}

Logged.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

Logged.muiName = 'IconMenu';

function Navigation({
  location,
  isAuthenticated,
  onLogout,
}) {
  return (
    <AppBar
      style={styles.appBar}
      showMenuIconButton={false}
      iconElementRight={isAuthenticated ? <Logged onLogout={onLogout} /> : <LoginButton />}
    >
      <Tabs style={styles.tabs} value={location.pathname}>
        <Tab label="Home" value="/" containerElement={<Link to="/" />} />
        <Tab label="Events" value="/event" containerElement={<Link to="/event" />} />
      </Tabs>
    </AppBar>
  );
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navigation;
