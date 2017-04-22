import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import { Grid } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Home from './Home';
import Event from './event/EventContainer';
import Events from './event/EventsContainer';
import NotFoundPage from './NotFoundPage';
import Navigation from './layout/Navigation';

function App({
  match,
  location,
  isAuthenticated,
  logout,
  muiTheme: {
    palette: {
      primary1Color,
    },
  },
}) {
  return (
    <div>
      <div style={{ backgroundColor: primary1Color }}>
        <Grid>
          <Navigation
            location={location}
            isAuthenticated={isAuthenticated}
            onLogout={logout}
          />
        </Grid>
      </div>
      <div>
        <Grid>
          <Switch>
            <Route exact path={match.url} component={Home} />
            <Route exact path="/event" component={Events} />
            <Route path="/event/:eventId" component={Event} />
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
      </div>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
};

export default withRouter(muiThemeable()(App));
