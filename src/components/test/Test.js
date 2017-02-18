import React, { Component } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import MultiSelectInput from './MultiSelectInput';

class Test extends Component {
  constructor(props) {
    super(props);
    this.boundSubmit = props.handleSubmit(data => props.onSubmitForm(data));
  }

  render() {
    return (
      <form onSubmit={this.boundSubmit}>
        <Field
          name="packages"
          component={MultiSelectInput}
          values={this.props.packages}
          config={{
            text: 'name',
            value: 'id',
          }}
        />
        <RaisedButton
          primary={true}
          type="submit"
          label="Submit"
        />
      </form>
    );
  }
}

export default Test;
