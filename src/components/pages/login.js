import React, { Component } from 'react';
import {FormGroup,FormControl, Form, Col, ControlLabel, Panel, Button, Well} from 'react-bootstrap';

const title = (
  <h1>Login</h1>
);

class Login extends Component {
  render() {
    return (
      <div>
    <Panel style={{marginTop: '100px'}}>
      <Well>
      <h2 style={{textAlign: 'center'}}><b>Login</b></h2>
      <Form horizontal>

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

     <FormGroup>
        <Col sm={6} md={3} />
        <a href="/forgotUserName">Forgot Username</a>|<a href="/forgotPassword">Forgot Password</a>&nbsp;
        </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button bsStyle="info" type="submit">
          Log in
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

export default Login;
