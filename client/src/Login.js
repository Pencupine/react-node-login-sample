import React , {Component} from 'react';
import './App.css';
//import {Link} from 'react-router-dom';
//import fire from './Fire';
//var firebase = require('firebase/app');
//require('firebase/auth');
//import 'firebase';
//import firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    //this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginFunc(e)
  {
    e.preventDefault();
    const login=this.props.login;
    login(this.state.email, this.state.password);
  }
  signupFunc(e)
  {
    e.preventDefault();
    const signup=this.props.signup;
    signup(this.state.email, this.state.password);
  }

  render(){
    return(
      <div>
        <div style={{padding : '50px' }}></div>
        <form>
          <div>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email1"
              placeholder="Enter email" />

          </div>
          <div>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="Password"
              placeholder="Password" />
          </div>
          <button
            type="submit"
            onClick={this.loginFunc.bind(this)} >Login</button>
          <button
            onClick={this.signupFunc.bind(this)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
