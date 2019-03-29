import React, { Component } from 'react';
import Companies from './body-children/Companies';

class Body extends Component {
    render(){
        return (
            <div>               
                <Companies/>  
            </div>
        );
    }
}

export default Body;