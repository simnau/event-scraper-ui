import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import {
  IconMenu,
  Tabs,
  Tab,
  IconButton,
  RaisedButton,
  MenuItem,
  TextField,
} from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Grid, Row, Col } from 'react-flexbox-grid';

import * as categories from '../../constants/categories';

const styles = {
  tabs: {
    width: '100%',
  },
  iconStyle: {
    marginRight: 0,
  },
};

function Header({
  location,
  onLogout,
  isAuthenticated,
  muiTheme: {
    palette: {
      primary1Color,
      lighterPrimary1Color,
      alternateTextColor,
    },
  },
}) {
  return (
    <div>
      <div style={{ backgroundColor: primary1Color, paddingTop: 20, paddingBottom: 20 }}>
        <Grid>
          <Row style={{ margin: 0 }}>
            <Col sm={4}>
              <span style={{ fontWeight: 'bold', fontSize: 42, color: alternateTextColor }}>
                Event Portal v1
              </span>
            </Col>
            <Col sm={4} style={{ paddingLeft: 0, paddingRight: 0, }}>
              <form
                style={{ display: 'flex' }}
                onSubmit={(event) => {
                  event.preventDefault();
                  return false;
                }}
              >
                <TextField
                  name="search"
                  hintText="Search events"
                  hintStyle={{ paddingLeft: 12, paddingRight: 12 }}
                  style={{ backgroundColor: alternateTextColor }}
                  inputStyle={{ paddingLeft: 12, paddingRight: 12 }}
                  underlineShow={false}
                  fullWidth={true}
                />
                <RaisedButton
                  type="submit"
                  style={{ height: 48, minWidth: 48 }}
                  backgroundColor={lighterPrimary1Color}
                  icon={<SearchIcon color={alternateTextColor} />}
                />
              </form>
            </Col>
            <Col smOffset={3} sm={1}>
              <IconMenu
                iconButtonElement={(
                  <IconButton iconStyle={{ color: alternateTextColor }}>
                    <AccountIcon />
                  </IconButton>
                )}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {isAuthenticated && [(
                  <MenuItem
                    key="signout"
                    primaryText="Sign out"
                    onTouchTap={onLogout}
                  />
                ), (
                  <MenuItem
                    key="profile"
                    primaryText="Profile"
                    containerElement={<Link to="/profile" />}
                  />
                )]}
                {!isAuthenticated && (
                  <MenuItem
                    primaryText="Sign in"
                    containerElement={<Link to="/login" />}
                  />
                )}
              </IconMenu>
            </Col>
          </Row>
        </Grid>
      </div>
      <div style={{ backgroundColor: lighterPrimary1Color }}>
        <Grid>
          <Tabs
            tabItemContainerStyle={{ backgroundColor: lighterPrimary1Color, }}
            style={styles.tabs}
            value={location.pathname}
          >
            <Tab
              label={I18n.t('navigation.home')}
              value="/"
              containerElement={<Link to="/" />}
            />
            <Tab
              label={I18n.t('navigation.events')}
              value="/events"
              containerElement={<Link to="/events" />}
            />
            <Tab
              label={I18n.t('navigation.concerts')}
              value={`/events/${categories.CONCERTS_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.CONCERTS_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.sports')}
              value={`/events/${categories.SPORTS_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.SPORTS_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.artsAndTheatre')}
              value={`/events/${categories.ARTS_THEATRE_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.ARTS_THEATRE_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.family')}
              value={`/events/${categories.FAMILY_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.FAMILY_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.festivals')}
              value={`/events/${categories.FESTIVALS_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.FESTIVALS_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.movies')}
              value={`/events/${categories.MOVIES_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.MOVIES_CATEGORY}`} />}
            />
            <Tab
              label={I18n.t('navigation.seminars')}
              value={`/events/${categories.SEMINARS_CATEGORY}`}
              containerElement={<Link to={`/events/${categories.SEMINARS_CATEGORY}`} />}
            />
          </Tabs>
        </Grid>
      </div>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  muiTheme: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default muiThemeable()(Header);
