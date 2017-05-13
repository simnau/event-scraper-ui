/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App';
import { logout } from './login/login-actions';

class AppContainer extends Component {
  render() {
    return (
      <App
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
  };
}

export default withRouter(connect(
  mapStateToProps,
  { logout }
)(AppContainer));
