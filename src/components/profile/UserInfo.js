import React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Row, Col } from 'react-flexbox-grid';

function UserInfo({
  profile,
}) {
  return (
    <Row
      style={{
        margin: 0,
        padding: '2rem 0 2rem 2rem',
      }}
    >
      <Col lg={2} sm={4} xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: 'red', width: 150, height: 150 }}>
          PHOTO
        </div>
      </Col>
      <Col lg={10} sm={8} xs={6}>
        <form form="userInfoForm">
          <Row style={{ margin: 0 }}>
            <Col
              sm={5}
            >
              <div style={{ margin: '0 1rem' }}>
                <Field
                  name="username"
                  floatingLabelText="Username"
                  floatingLabelFixed
                  component={TextField}
                  disabled
                  inputStyle={{ color: 'black' }}
                  underlineShow={false}
                  fullWidth
                />
                <Field
                  name="email"
                  floatingLabelText="Email"
                  component={TextField}
                  disabled
                  inputStyle={{ color: 'black' }}
                  underlineShow={false}
                  fullWidth
                />
              </div>
            </Col>
            <Col
              sm={5}
            >
              <div style={{ margin: '0 1rem' }}>
                <Field
                  name="country"
                  floatingLabelText="Country"
                  component={TextField}
                  fullWidth
                />
                <Field
                  name="city"
                  floatingLabelText="City"
                  component={TextField}
                  fullWidth
                />
              </div>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}

export default UserInfo;
