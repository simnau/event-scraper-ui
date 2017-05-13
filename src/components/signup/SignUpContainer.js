import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';

import SignUp from './SignUp';
import * as actions from './signup-actions';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    const { handleSubmit } = this.props;
    this.boundSubmit = handleSubmit(this.signUp);
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  handleCancel = () => {
    this.props.clearError();
    this.props.history.push('/login');
  };

  signUp = (user) => {
    this.props.clearError();
    this.props.signUp(user)
      .then(() => this.props.history.push('/login'))
      .catch(() => {});
  };

  render() {
    return (
      <SignUp
        {...this.props}
        onSubmit={this.boundSubmit}
        onCancel={this.handleCancel}
      />
    );
  }
}

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function validate(values) {
  const errors = {};
  if (!values.email || values.email.trim() === '') {
    errors.email = I18n.t('signUp.validation.emailRequired');
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = I18n.t('signUp.validation.passwordRequired');
  }
  if (!values.repeatPassword || values.repeatPassword.trim() === '') {
    errors.repeatPassword = I18n.t('signUp.validation.repeatPasswordRequired');
  }

  if (values.password && values.email.trim() !== ''
      && values.repeatPassword && values.repeatPassword.trim() !== ''
      && values.password !== values.repeatPassword) {
    errors.repeatPassword = I18n.t('signUp.validation.passwordsMustMatch');
  }

  return errors;
}

const reduxFormConfig = {
  form: 'loginForm',
  validate,
};

const SignUpForm = reduxForm(
  reduxFormConfig,
)(SignUpContainer);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isError: state.signup.isError,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(SignUpForm));
