import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppBar, Tabs, Tab } from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import FlatButton from 'material-ui/FlatButton';

const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
};

class Login extends Component {
  render() {
    return (
      <FlatButton
        {...this.props}
        label="Login"
        containerElement={<Link to="/login" />}
      />
    );
  }
}

Login.muiName = 'FlatButton';

const Logged = ({
  onLogout,
  ...props,
}) => {
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
};

Logged.muiName = 'IconMenu';

const Navigation = ({
  location,
  isAuthenticated,
  onLogout,
}) => {
  return (
    <AppBar
      style={styles.appBar}
      showMenuIconButton={false}
      iconElementRight={isAuthenticated ? <Logged onLogout={onLogout} /> : <Login />}
    >
      <Tabs style={styles.tabs} value={location.pathname}>
        <Tab label="Home" value="/" containerElement={<Link to="/" />} />
        <Tab label="Events" value="/event" containerElement={<Link to="/event" />} />
        <Tab label="Test" value="/test" containerElement={<Link to="/test" />} />
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
