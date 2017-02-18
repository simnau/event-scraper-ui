import React, { Component } from 'react';
import ChipInput from 'material-ui-chip-input';

class MultiSelectInput extends Component {
  onRequestAdd(newValue) {
    const { input: { value, onChange, onBlur } } = this.props;
    console.log(value, newValue);
    if (value) {
      onChange([...value, newValue]);
    }
  }

  onRequestDelete(value, index) {
    console.log(value, index);
  }

  constructor(props) {
    super(props);
    this.handleRequestAdd = this.onRequestAdd.bind(this);
    this.handleRequestDelete = this.onRequestDelete.bind(this);
  }

  render() {
    const {
      input: {
        value,
        onChange,
        onBlur,
        onFocus,
      },
      meta: {
        error,
        touched,
      },
      values,
      config,
    } = this.props;

    console.log(error, touched);

    return (
      <ChipInput
        value={value}
        onRequestAdd={this.handleRequestAdd}
        onRequestDelete={this.handleRequestDelete}
        onFocus={onFocus}
        onBlur={() => onBlur()}
        dataSource={values}
        dataSourceConfig={config}
      />
    );
  }
}

export default MultiSelectInput;
