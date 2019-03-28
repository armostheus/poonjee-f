import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import CreateCompany from './components/CreateCompany';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      <Router>
        <div className="App">
          <Header 
            name={this.state.name} 
            role={this.state.role}
            logOut={this.logoutUser}
          />

          <Route exact path="/" render={props => (
            <React.Fragment>
            <h1>Welcome, {this.state.name}</h1>
            &nbsp;&nbsp;&nbsp;<Link to="/dashboard"><button type="button" class="btn btn-primary">Jump to Dashboard</button></Link>&nbsp;&nbsp;&nbsp;
            <Link to="/create-company"><button type="button" class="btn btn-primary">Create New Company</button></Link>
            </React.Fragment>
          )} />
          

          <Route path="/dashboard" render={props => (
            <React.Fragment>
              <Body/>
            </React.Fragment>
          )} />

          <Route path="/create-company" component={CreateCompany} />

        </div>
      </Router>
    );
  }
}

export default App;
