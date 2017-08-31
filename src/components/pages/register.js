import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, Form, Col, ControlLabel, Panel, Button, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';
import {postUser, resetButton} from '../../actions/userActions';
import axios from 'axios';

class EmailError extends Component {
      render(){
        return (
        <span>Enter valid email data</span>
        )
      }
}

class Register extends Component {
  constructor(){
    super()
    this.state =({hasErrors: false})
  }


 handleErrors (){
  var password = findDOMNode(this.refs.password).value;
  var confirm = findDOMNode(this.refs.confirm).value;
  var email = findDOMNode(this.refs.email).value;
  var username = findDOMNode(this.refs.username).value;
  var securityQuestion = findDOMNode(this.refs.securityQuestion).value;
  var securityAnswer = findDOMNode(this.refs.securityAnswer).value;
  
 }

 handleSubmit(){
  var password = findDOMNode(this.refs.password).value;
  var confirm = findDOMNode(this.refs.confirm).value;
  if(password !== '' && password === confirm){
    const user=[{
     email: findDOMNode(this.refs.email).value,
     username: findDOMNode(this.refs.username).value,
     password: findDOMNode(this.refs.password).value,
     securityQuestion: findDOMNode(this.refs.securityQuestion).value,
     securityAnswer: findDOMNode(this.refs.securityAnswer).value
   }]
   this.props.postUser(user);
  } else {
    console.log('this didnt work');
  }
}


 resetForm(){
   this.props.resetButton();
   findDOMNode(this.refs.email).value = '',
   findDOMNode(this.refs.username).value = '',
   findDOMNode(this.refs.password).value = '',
   findDOMNode(this.refs.confirm).value = '',
   findDOMNode(this.refs.securityQuestion).value = '',
   findDOMNode(this.refs.securityAnswer).value = ''
 }
  


  render() {
   
    return (
      <div>
      <Well style={{marginTop: '80px'}}>
      <h2 style={{textAlign: 'center'}}><b>Register</b></h2>
      <Form horizontal>
    <FormGroup controlId="formHorizontalEmail" validationState={this.props.validation}>
      <Col componentClass={ControlLabel} sm={2}>
        Email:
      </Col>
      <Col sm={10}>
        <FormControl name="email" type="email" placeholder="Email" ref="email" onMouseOut={()=> this.onMouseOut()}/>
        {this.state.hasErrors ?<EmailError/> : <span></span> }
        <FormControl.Feedback/>
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalUsername" validationState={this.props.validation}>
      <Col componentClass={ControlLabel} sm={2}>
        Username:
      </Col>
      <Col sm={10}>
        <FormControl name="username" type="text" placeholder="Username" ref="username"/>
        <FormControl.Feedback/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword" validationState={this.props.validation}>
      <Col componentClass={ControlLabel} sm={2}>
        Password:
      </Col>
      <Col sm={10}>
        <FormControl name="password" type="password" placeholder="Password" ref="password"/>
        <FormControl.Feedback/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Confirm Password:
      </Col>
      <Col sm={10}>
        <FormControl name="confirm" type="password" placeholder="Confirm Password" ref="confirm"/>
        <FormControl.Feedback/>
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityQuestion" validationState={this.props.validation}>
      <Col componentClass={ControlLabel} sm={2}>
      Security Question:
      </Col>
      <Col sm={10}>
        <FormControl  name="securityQuestion" type="text" placeholder="Enter a Security Question" ref="securityQuestion"/>
        <FormControl.Feedback/>
      </Col>
    </FormGroup>

     <FormGroup controlId="formHorizontalSecurityAnswer" validationState={this.props.validation}>
      <Col componentClass={ControlLabel} sm={2}>
      Security Answer:
      </Col>
      <Col sm={10}>
        <FormControl  name="securityAnswer" type="password" placeholder="Enter an Answer to the Security Question" ref="securityAnswer"/>
        <FormControl.Feedback/>
      </Col>
    </FormGroup>


    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick ={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))} bsStyle={(!this.props.style)?("info"):(this.props.style)}
        >
          {(!this.props.msg)?("Register"):(this.props.msg)}
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </Well>
  </div>
    );
  }
  onMouseOut(){
    var email = findDOMNode(this.refs.email).value;
    if(email.length < 5){
      this.setState({hasErrors: true})
    } else {
    this.setState({hasErrors: false})
    }
  }
}



function mapStateToProps(state){
  return {
      users: state.user.user,
      msg: state.user.msg,
      style: state.user.style,
      validation: state.user.validation
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({postUser, resetButton}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);