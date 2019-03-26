import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component {
  state={
    name: 'Shubham Chakraborty',
    role: 'user'
  }

  logoutUser = (e) => {
    console.log('stateUser: '+this.state.name+' and header user:'+e+' will be logged out');
  }

  render() {
    return (
      <div className="App">
        <Header 
          name={this.state.name} 
          role={this.state.role}
          logOut={this.logoutUser}
        />
        <Body/>
      </div>
    );
  }
}

export default App;
