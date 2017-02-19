import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';

import SignUp from './SignUp';
import * as actions from './signup_actions';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.signUp.bind(this);
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.router.push('/');
    }
  }

  signUp(user) {
    this.props.signUp(user)
      .then(() => this.props.router.push('/login'))
      .catch(() => {});
  }

  render() {
    return (
      <SignUp
        {...this.props}
        onSubmitForm={this.handleSignUp}
      />
    );
  }
}

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
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
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(SignUpForm));
