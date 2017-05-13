import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './profile-actions';
import Profile from './Profile';

class ProfileContainer extends Component {
  static propTypes = {

  };

  componentWillMount() {
    this.props.fetchUserProfile();
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    return (
      <Profile
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(ProfileContainer));
