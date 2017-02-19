import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Field } from 'redux-form';
import {
  TextField,
  Checkbox,
} from 'redux-form-material-ui';

class Login extends Component {
  constructor(props) {
    super(props);

    const { handleSubmit, onSubmitForm } = this.props;
    this.boundSubmit = handleSubmit(data => onSubmitForm(data));
  }

  render() {
    return (
      <Grid style={{ paddingTop: '40px' }}>
        <Row>
          <Col xs={4} style={{ margin: 'auto' }}>
            <Paper zDepth={1} style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px', paddingTop: '20px' }}>
              <form onSubmit={this.boundSubmit}>
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
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default Login;
