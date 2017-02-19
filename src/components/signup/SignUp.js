import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Field } from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';

class SignUp extends Component {
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
                <div>
                  <Field name="repeatPassword" type="password" component={TextField} floatingLabelText="Repeat Password" />
                </div>
                <div style={{ display: 'flex' }}>
                  <FlatButton
                    label="Cancel"
                    containerElement={<Link to="/login" />}
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
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default SignUp;
