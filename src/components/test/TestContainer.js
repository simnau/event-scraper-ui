import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Test from './Test';

class TestContainer extends Component {
  onSubmitForm(data) {
    console.log(data);
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.onSubmitForm.bind(this);
  }

  componentWillMount() {
    this.props.initialize({
      packages: [],
    });
  }

  render() {
    return (
      <Test
        {...this.props}
        onSubmitForm={this.handleSubmit}
      />
    );
  }
}

function validate(values) {
  return {

  };
}

const reduxFormConfig = {
  form: 'TestForm',
  validate,
};

const TestForm = reduxForm(
  reduxFormConfig,
)(TestContainer);

function mapStateToProps(state) {
  const packages = [{
    id: 1,
    name: 'UK Horses',
  }, {
    id: 2,
    name: 'UK Dogs',
  }];

  return {
    packages,
  };
}

export default connect(
  mapStateToProps,
)(TestForm);
