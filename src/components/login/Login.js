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
  onSubmit
}) {
  return (
    <Grid style={{ paddingTop: '40px' }}>
      <Row>
        <Col xs={4} style={{ margin: 'auto' }}>
          <Paper zDepth={1} style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px', paddingTop: '20px' }}>
            <form onSubmit={onSubmit}>
              <div>
                <Field name="email" type="text" component={TextField} floatingLabelText="Email" />
              </div>
              <div>
                <Field name="password" type="password" component={TextField} floatingLabelText="Password" />
              </div>
              <div style={{ marginBottom: '20px' }}>
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
};

export default Login;
