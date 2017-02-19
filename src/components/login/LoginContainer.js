import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';

import Login from './Login';
import * as actions from './login_actions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.login.bind(this);
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.router.push('/');
    }
  }

  login(user) {
    this.props.login(user)
      .then(() => this.props.router.push('/'))
      .catch(() => {});
  }

  render() {
    return (
      <Login
        {...this.props}
        onSubmitForm={this.handleLogin}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
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
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(LoginForm));
