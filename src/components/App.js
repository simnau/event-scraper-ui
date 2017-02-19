import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Grid } from 'react-flexbox-grid';

import Navigation from './layout/Navigation';

const App = ({
  children,
  location,
  isAuthenticated,
  logout,
}) => {
  return (
    <Grid>
      <Navigation
        location={location}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      <div>
        {children}
      </div>
    </Grid>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

export default withRouter(App);
