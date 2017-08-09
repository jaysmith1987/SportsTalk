import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import './App.css';

const title = (
  <h1>Register</h1>
);

class Register extends Component {
  render() {
    return (
    <div className="Login">
    <Panel header={title}>
       <label className="text-center" for="Firstname">FirstName:</label>
       <input id="Firstname" type="text" className="form-control text-center" name="Firstname" placeholder="FirstName"/>
       <label className="text-center" for="Lastname">LastName:</label>
       <input id="Lastname" type="text" className="form-control text-center" name="Lastname" placeholder="LastName"/>
       <label className="text-center" for="email">Email address:</label>
       <input id="email" type="text" className="form-control text-center" name="email" placeholder="Email"/>
       <label className="text-center" for="username">UserName:</label>
       <input id="username" type="text" className="form-control text-center" name="username" placeholder="UserName"/><br/>
       <label className="text-center" for="Password">Password:</label>
       <input id="password" type="text" className="form-control text-center" name="password" placeholder="Password"/><br/>
       <label className="text-center" for="confirmPassword">Confirm Password:</label>
       <input id="confirmPassword" type="text" className="form-control text-center" name="confirmPassword" placeholder="Enter Pasword again"/><br/>
       <label className="text-center" for="securityQ1">Security Question 1:</label><br/>
       <select className="list-group">
           <option><span className="text-center">What was the name of your last college attended?</span></option>
           <option><span className="text-center">Where where you born?</span></option>
           <option><span className="text-center">When was your first kid born?</span></option>
           <option><span className="text-center">What is your favorite time of year?</span></option>
           <option><span className="text-center">What is your favorite holiday?</span></option>
           <option><span clasName="text-center">Who is your best friend?</span></option>
       </select><br/>
       <input id="answer" type="text" className="form-control text-center" name="answer" placeholder="Answer"/><br/>
       <button className="btn btn-primary">Submit</button>
    </Panel>
  </div>
    );
  }
}

export default Register;