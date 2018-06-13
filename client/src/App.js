import React, { Component } from 'react';
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
          <h1 className="App-title">Welcome to React Login</h1>
        </header>
        <input id="email" ref="email" placeholder='email' />
        <br/>
        <input id="pass" ref="pass" placeholder='password' />
        <br/>
        <hr/>
        <button onClick ={this.clickFunc.bind(this)}>SHOW KEYS</button>
        <p>Welcome {this.state.apiKey}</p>
      </div>
    );
  }
}

export default App;
