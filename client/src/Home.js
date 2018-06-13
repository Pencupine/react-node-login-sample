import React, { Component } from 'react';
//import fire from './Fire';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
               <button onClick={this.props.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;
