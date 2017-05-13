import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';

import Login from './Login';
import * as actions from './login-actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    const { handleSubmit } = this.props;
    this.boundSubmit = handleSubmit(this.handleLogin);
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  handleLogin = (user) => {
    this.props.clearError();
    this.props.login(user)
      .then(() => this.props.history.push('/'))
      .catch(() => {});
  };

  render() {
    return (
      <Login
        {...this.props}
        onSubmit={this.boundSubmit}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function validate(values) {
  const errors = {};
  if (!values.email || values.email.trim() === '') {
    errors.email = I18n.t('login.validation.emailRequired');
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = I18n.t('login.validation.passwordRequired');
  }
  return errors;
}

const reduxFormConfig = {
  form: 'loginForm',
  validate,
};

const LoginForm = reduxForm(
  reduxFormConfig,
)(LoginContainer);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isError: state.authentication.isError,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(LoginForm));
