import React, { Component } from 'react';
import {FormGroup, FormControl, Form, Col, ControlLabel, Panel, Button, Well} from 'react-bootstrap';

const title = (
  <h1>Register</h1>
);

class Register extends Component {
  render() {
    return (
      <div>
    <Panel style={{marginTop: '100px'}}>
      <Well>
      <h2 style={{textAlign: 'center'}}><b>Register</b></h2>
      <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email:
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalUsername">
      <Col componentClass={ControlLabel} sm={2}>
        Username:
      </Col>
      <Col sm={10}>
        <FormControl type="username" placeholder="Username" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password:
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalPasswordConfirm">
      <Col componentClass={ControlLabel} sm={2}>
      Confirm Password:
      </Col>
      <Col sm={10}>
        <FormControl type="passwordconfirm" placeholder="Confirm Password" />
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityQuestion">
      <Col componentClass={ControlLabel} sm={2}>
      Security Question:
      </Col>
      <Col sm={10}>
        <FormControl type="securityquestion" placeholder="Enter a Security Question" />
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityAnswer">
      <Col componentClass={ControlLabel} sm={2}>
      Security Answer:
      </Col>
      <Col sm={10}>
        <FormControl type="securityanswer" placeholder="Enter a Security Answer" />
      </Col>
    </FormGroup>


    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button bsStyle="info" type="submit">
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </Well>
  </Panel>
  </div>
    );
  }
}

export default Register;