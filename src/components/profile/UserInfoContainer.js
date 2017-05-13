import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import UserInfo from './UserInfo';

class UserInfoContainer extends Component {
  static propTypes = {

  };

  componentWillMount() {
    if (this.props.profile) {
      this.props.initialize(this.props.profile);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.profile && nextProps.profile) {
      this.props.initialize(nextProps.profile);
    }
  }

  render() {
    return (
      <UserInfo
        {...this.props}
      />
    );
  }
}

function validate(values) {
  return {

  };
}

const reduxFormConfig = {
  form: 'userInfoForm',
  validate,
};

export default reduxForm(
  reduxFormConfig
)(UserInfoContainer);
