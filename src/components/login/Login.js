import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Field } from 'redux-form';
import {
  TextField,
  Checkbox,
} from 'redux-form-material-ui';

function Login({
  onSubmit,
  isError,
}) {
  return (
    <Grid style={{ paddingTop: 40 }}>
      <Row center="xs">
        <Col xs={4} style={{ minWidth: 350 }}>
          <Paper zDepth={1} style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 40, paddingTop: 20 }}>
            {isError && (
              <div style={{ textAlign: 'left', color: 'red' }}>
                <span>You have entered an invalid username and/or password</span>
              </div>
            )}
            <form onSubmit={onSubmit}>
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
              <div style={{ marginBottom: 20, textAlign: 'left' }}>
                <Field name="rememberMe" component={Checkbox} label="Remember?" />
              </div>
              <div style={{ display: 'flex' }}>
                <FlatButton
                  label="Cancel"
                  containerElement={<Link to="/" />}
                />
                <FlatButton
                  label="Sign Up"
                  containerElement={<Link to="/signup" />}
                />
                <RaisedButton
                  label="Login"
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

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Login;
