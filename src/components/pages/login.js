import React, { Component } from 'react';
import {FormGroup,FormControl, Form, Col, ControlLabel, Panel, Button, Well} from 'react-bootstrap';

const title = (
  <h1>Login</h1>
);

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {user:'', pass:'', loggedIn: false}
  }

  handleUser(event){
    this.setState({user:event.target.value.substr(0,15)})
  }

  handlePass(event){
    this.setState({pass:event.target.value})
  }

  login(event){
    event.preventDefault();
    this.setState({loggedIn: true})
    console.log(this.state.pass);
    console.log(this.state.user);
  }


  render() {
    return (
      <div className="container body">
    <Panel style={{marginTop: '100px'}}>
      <Well>
      <h2 style={{textAlign: 'center'}}><b>Login</b></h2>
      <Form horizontal onSubmit={this.login.bind(this)}>

     <FormGroup controlId="formHorizontalUsername">
      <Col componentClass={ControlLabel} sm={2}>
        Username:
      </Col>
      <Col sm={10}>
        <FormControl type="username" placeholder="Username" 
        onChange={this.handleUser.bind(this)} value={this.state.user}/>
        {this.state.user === '' && this.state.loggedIn && <span className="error">Enter a Username</span>}
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password:
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" 
        onChange={this.handlePass.bind(this)} value={this.state.pass}/>
         {this.state.pass === '' && this.state.loggedIn && <span className="error">Enter a Pasword</span>}
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
