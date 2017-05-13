import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import isAuth from './security/isAuthenticated';
import Home from './Home';
import Event from './event/EventContainer';
import Events from './event/EventsContainer';
import Profile from './profile/ProfileContainer';
import NotFoundPage from './NotFoundPage';
import Header from './layout/Header';

function App({
  match,
  location,
  isAuthenticated,
  logout,
}) {
  return (
    <div>
      <Header
        location={location}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      <div>
        <Grid>
          <Row style={{ margin: 0 }}>
            <Col smOffset={1} sm={10}>
              <Switch>
                <Route exact path={match.url} component={Home} />
                <Route exact path="/events" component={Events} />
                <Route path="/events/:categoryId" component={Events} />
                <Route path="/event/:eventId" component={Event} />
                <Route path="/profile*" component={isAuth(Profile)} />
                <Route component={NotFoundPage} />
              </Switch>
            </Col>
          </Row>
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
};

export default App;
