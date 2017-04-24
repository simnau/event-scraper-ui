import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Field } from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';

function SignUp({
  onSubmit,
  isError,
  onCancel,
}) {
  return (
    <Grid style={{ paddingTop: 40 }}>
      <Row center="xs">
        <Col xs={4} style={{ minWidth: 350 }}>
          <Paper zDepth={1} style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 40, paddingTop: 20, textAlign: 'left' }}>
            <form onSubmit={onSubmit}>
              {isError && (
                <div style={{ textAlign: 'left', color: 'red' }}>
                  <span>There was an error signing up. The email may already be in use</span>
                </div>
              )}
              <div>
                <Field
                  name="email"
                  type="text"
                  component={TextField}
                  floatingLabelText="Email"
                  fullWidth={true}
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  component={TextField}
                  floatingLabelText="Password"
                  fullWidth={true}
                />
              </div>
              <div>
                <Field
                  name="repeatPassword"
                  type="password"
                  component={TextField}
                  floatingLabelText="Repeat Password"
                  fullWidth={true}
                />
              </div>
              <div style={{ display: 'flex' }}>
                <FlatButton
                  label="Cancel"
                  onTouchTap={onCancel}
                />
                <RaisedButton
                  label="Sign Up"
                  primary={true}
                  type="submit"
                />
              </div>
            </form>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default SignUp;
