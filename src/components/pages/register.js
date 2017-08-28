import React, { Component } from 'react';
import {FormGroup, FormControl, Form, Col, ControlLabel, Panel, Button, Well} from 'react-bootstrap';




class Register extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', username:'', password:'', confirmPass:'', secQ: '', secA: '', posted: false}
  }

  handleEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  handleUsername(event){
    this.setState({username: event.target.value})
  }

  handlePassword(event){
    this.setState({password:event.target.value})
  }

  confirmPass(event){
    this.setState({confirmPass: event.target.value})
  }

  secQ(event){
    this.setState({secQ:event.target.value})
  }

  secA(event){
    this.setState({secA: event.target.value})
  }
  
  register(event){
    event.preventDefault();
    console.log(this.state.email, this.state.username);
    console.log(this.state.password, this.state.confirmPass);
    console.log(this.state.secQ, this.state.secA);
    this.setState({posted: true});
  }


  render() {
    return (
      <div>
      <Well style={{marginTop: '80px'}}>
      <h2 style={{textAlign: 'center'}}><b>Register</b></h2>
      <Form horizontal onSubmit={this.register.bind(this)}>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email:
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email"
        onChange={this.handleEmail.bind(this)} value={this.state.email} />
        {this.state.email === '' && this.state.posted === true && <span className="error">Enter a valid email!</span>}
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalUsername">
      <Col componentClass={ControlLabel} sm={2}>
        Username:
      </Col>
      <Col sm={10}>
        <FormControl type="username" placeholder="Username" 
        onChange={this.handleUsername.bind(this)} value={this.state.username} />
        {this.state.username === '' && this.state.posted === true && <span className="error">Enter a username!</span>}
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password:
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password"
        onChange={this.handlePassword.bind(this)} value={this.state.password} />
        {this.state.password === '' && this.state.posted === true && <span className="error">Enter a valid Password</span>}
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalPasswordConfirm">
      <Col componentClass={ControlLabel} sm={2}>
      Confirm Password:
      </Col>
      <Col sm={10}>
        <FormControl type="passwordconfirm" placeholder="Confirm Password" 
        onChange={this.confirmPass.bind(this)} value={this.state.confirmPass}/>
        {this.state.confirmPass === '' && this.state.posted === true && <span className="error">Confirm Password!</span>}
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityQuestion">
      <Col componentClass={ControlLabel} sm={2}>
      Security Question:
      </Col>
      <Col sm={10}>
        <FormControl type="securityquestion" placeholder="Enter a Security Question"
        onChange={this.secQ.bind(this)} value={this.state.secQ} />
        {this.state.secQ === '' && this.state.posted === true && <span className="error">Enter a Security Question!</span>}
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityAnswer">
      <Col componentClass={ControlLabel} sm={2}>
      Security Answer:
      </Col>
      <Col sm={10}>
        <FormControl type="securityanswer" placeholder="Enter a Security Answer"
        onChange={this.secA.bind(this)} value={this.state.secA} />
        {this.state.secA === '' && this.state.posted === true && <span className="error">Enter an Anser to your Security Question!</span>}
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
  </div>
    );
  }
}

export default Register;