import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { logout } from './login/login_actions';

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

export default connect(
  mapStateToProps,
  { logout }
)(AppContainer);
