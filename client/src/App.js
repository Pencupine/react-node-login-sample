import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import firebase from 'firebase';
//import 'firebase/auth';


//import firebase from 'firebase';
//may need firebase/auth
/*
fetch('/api/keys')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var config = data;
    firebase.initializeApp(config)
    console.log(firebase);
  })
  .catch((err) => {
    console.log(err);
  })
*/
class App extends Component {
  constructor(props){
    super(props);

    var config = {
        apiKey: "AIzaSyD9KPbmdippxzR1PRuRLOkMPSoiHGAGw7I",
        authDomain: "pragmatic-will-206607.firebaseapp.com",
        databaseURL: "https://pragmatic-will-206607.firebaseio.com",
        projectId: "pragmatic-will-206607",
        storageBucket: "pragmatic-will-206607.appspot.com",
        messagingSenderId: "473169415404"
      };
    firebase.initializeApp(config);

    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  login(email, password ) {

    console.log(firebase);

    firebase.auth().signInWithEmailAndPassword(email, password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  logout() {
      firebase.auth().signOut();
  }

  render() {
    if(this.state.authUser) {console.log(this.state.authUser);}
    return (
      <div className="App">
        {this.state.user ? (<Home
          logout={this.logout.bind(this)}/>) : (<Login
          signup={this.signup.bind(this)}
          login={this.login.bind(this)}/>)}
      </div>

    );
  }
}

export default App;
