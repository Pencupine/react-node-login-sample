import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  clickFunc() {
    console.log('click Event');

    fetch('/api/keys')
      .then(res => res.json())
      .then(data => {
        this.setState(data);
        console.log(data);
        console.log(this.state.apiKey)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick ={this.clickFunc.bind(this)}>SHOW KEYS</button>
        <p>Welcome {this.state.apiKey}</p>
      </div>
    );
  }
}

export default App;
