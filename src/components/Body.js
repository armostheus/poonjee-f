import React, { Component } from 'react';
import Companies from './body-children/Companies';
import CompanyUser from './body-children/CompanyUser';
import CompanyAdmin from './body-children/CompanyAdmin';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Body extends Component {
    render(){
        return (
            <Router>
            <div>
                
                <Companies/>
                <CompanyUser/>
                <CompanyAdmin/>
            </div>
            <Route exact path="/" component={Body} />
            </Router>
        );
    }
}

export default Body;