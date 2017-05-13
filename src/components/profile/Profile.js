import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Paper, Menu, MenuItem } from 'material-ui';

import UserInfo from './UserInfoContainer';
import MainProfile from './main/MainProfile';
import VisitedEvents from './visited/VisitedEvents';
import InterestedInEvents from './interested/InterestedInEvents';
import MyReviews from './reviews/MyReviews';
import MyRatings from './ratings/MyRatings';
import Other from './other/Other';

function Profile({
  match,
  profile,
}) {
  return (
    <Paper zDepth={1}>
      <div style={{ margin: 0, backgroundColor: '#F8F9F9', display: 'flex', height: 768 }}>
        {/*<div style={{ backgroundColor: 'white', padding: 0, width: '20%', minWidth: 175, marginRight: '0.25rem' }}>
          <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
            <Menu
              autoWidth={false}
              listStyle={{ display: 'block' }}
              value={match.url}
            >
              <MenuItem
                primaryText="Profile"
                value="/profile"
                containerElement={<Link to="/profile" />}
              />
              <MenuItem
                primaryText="Went To"
                value="/profile/visited"
                containerElement={<Link to="/profile/visited" />}
              />
              <MenuItem
                primaryText="Interested In Going To"
                value="/profile/interested"
                containerElement={<Link to="/profile/interested" />}
              />
              <MenuItem
                primaryText="My Reviews"
                value="/profile/reviews"
                containerElement={<Link to="/profile/reviews" />}
              />
              <MenuItem
                primaryText="My Ratings"
                value="/profile/ratings"
                containerElement={<Link to="/profile/ratings" />}
              />
              <MenuItem
                primaryText="Other"
                value="/profile/other"
                containerElement={<Link to="/profile/other" />}
              />
            </Menu>
          </div>
        </div>*/}
        <div style={{ padding: 0, width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              backgroundColor: 'white',
              margin: '0 0 0.25rem 0',
              flex: 1,
            }}
          >
            <UserInfo
              profile={profile}
            />
          </div>
          <div style={{ backgroundColor: 'white', flex: 3 }}>
            <Switch>
              <Route exact path="/profile" component={MainProfile} />
              <Route path="/profile/visited" component={VisitedEvents} />
              <Route path="/profile/interested" component={InterestedInEvents} />
              <Route path="/profile/reviews" component={MyReviews} />
              <Route path="/profile/ratings" component={MyRatings} />
              <Route path="/profile/other" component={Other} />
            </Switch>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Profile;
