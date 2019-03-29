import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import CompanyUser from './CompanyUser';
import CompanyAdmin from './CompanyAdmin';



class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: new Map([
                ['cpnyID098', {
                    name: 'Company 1',
                    id: 'cpnyID098',
                    description: 'Some quick Company 1 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['cpnyID097', {
                    name: 'Company 2',
                    id: 'cpnyID097',
                    description: 'Some quick Company 2 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['cpnyID096', {
                    name: 'Company 3',
                    id: 'cpnyID096',
                    description: 'Some quick Company 3 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['cpnyID095', {
                    name: 'Company 4',
                    id: 'cpnyID095',
                    description: 'Some quick Company 4 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['cpnyID094', {
                    name: 'Company 5',
                    id: 'cpnyID094',
                    description: 'Some quick Company 5 description text to build on the card title and make up the bulk of the card\'s content.',
                }]
            ]),
            selectedCompany: {},
        };
      }

      changeState(selectedCompany){
        this.setState((state, props) => ({companies: state.companies, selectedCompany: state.companies.get(selectedCompany)}));
      }   

    render(){

        let allCompaniesUser = [],
            allCompaniesAdmin = [];
        this.state.companies.forEach((value,key,map)=>{ allCompaniesUser.push(<Company key={value.id} compId={value.id} name={value.name} description={value.description} role='U' thisValue={this} />) });
        this.state.companies.forEach((value,key,map)=>{ allCompaniesAdmin.push(<Company key={value.id} compId={value.id} name={value.name} description={value.description} role='A' thisValue={this}/>) });

        return (
            <Router>
            <div>
                <Route exact path="/dashboard/" render={props => (
                    <React.Fragment>
                        <h4>Companies</h4> <h6> - User Panel</h6>
                        <div className="user-panel container-fluid row">
                            {allCompaniesUser}
                        </div>
                        <br/>
                            <h6> - Admin Panel</h6>
                        <div className="admin-panel container-fluid row">
                            {allCompaniesAdmin}
                        </div>
                    </React.Fragment>
                )} />
                

                <Route path="/dashboard/company-user" render={props => (
                    <React.Fragment>
                        <CompanyUser details={this.state.selectedCompany}/>
                    </React.Fragment>
                )} />
                
                <Route path="/dashboard/company-admin" render={props => (
                    <React.Fragment>
                        <CompanyAdmin details={this.state.selectedCompany}/>
                    </React.Fragment>
                )} /> 
  
            </div>  
            </Router>          
        );
    }

    
}

const head = {
    backgroundColor:'#57689e',
    textAlign: 'center',
    color: 'white',
    fontSize: '30px'
}

function Company(props) {
    if(props.role === 'A'){
        return (
            
            <div className="card col" style={{width: '18rem'}}  onClick={() => {props.thisValue.changeState(props.compId)}}>
                <Link to="/dashboard/company-admin" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="card-img-top" style={head}>{props.name}</div>
                    <div className="card-body">
                        <p className="card-text">{props.description} & {props.role}</p>
                    </div>
                </Link>    
            </div>
            
        );
    } else {
        return (
            <div className="card col" style={{width: '18rem'}}  onClick={() => {props.thisValue.changeState(props.compId)}}>
                <Link to="/dashboard/company-user" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="card-img-top" style={head}>{props.name}</div>
                    <div className="card-body">
                        <p className="card-text">{props.description} & {props.role}</p>
                    </div>
                
                </Link>
            </div>
        );
    }   
}

export default Companies;