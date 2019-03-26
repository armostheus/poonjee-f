import React, { Component } from 'react';
import Companies from './body-children/Companies';
import CompanyUser from './body-children/CompanyUser';
import CompanyAdmin from './body-children/CompanyAdmin';

class Body extends Component {
    render(){
        return (
            <div>
                <Companies/>
                <CompanyUser/>
                <CompanyAdmin/>
            </div>
            
        );
    }
}

export default Body;