import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import './App.css';

const title = (
  <h1>Login</h1>
);

class Login extends Component {
  render() {
    return (
    <div className="Login">
    <Panel header={title}>
       <label className="text-center" for="username">Username:</label>
       <input id="email" type="text" className="form-control text-center" name="email" placeholder="Username"/>
       <label className="text-center" for="password">Password:</label>
       <input id="password" type="text" className="form-control text-center" name="password" placeholder="Password"/><br/>
       <button className="btn btn-primary">Submit</button>
    </Panel>
  </div>
    );
  }
}

export default Login;
