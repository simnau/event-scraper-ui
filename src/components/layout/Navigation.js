import React from 'react';
import { Link } from 'react-router';
import { AppBar, Tabs, Tab } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
};

const Navigation = ({ location }) => {
  return (
    <AppBar
      style={styles.appBar}
      showMenuIconButton={false}
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
