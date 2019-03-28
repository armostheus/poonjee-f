import React, { Component } from 'react';

import CompanyUser from './CompanyUser';
import CompanyAdmin from './CompanyAdmin';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: new Map([
                ['Company1', {
                    name: 'Company 1',
                    id: 'cpnyID098',
                    description: 'Some quick Company 1 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['Company2', {
                    name: 'Company 2',
                    id: 'cpnyID097',
                    description: 'Some quick Company 2 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['Company3', {
                    name: 'Company 3',
                    id: 'cpnyID096',
                    description: 'Some quick Company 3 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['Company4', {
                    name: 'Company 4',
                    id: 'cpnyID095',
                    description: 'Some quick Company 4 description text to build on the card title and make up the bulk of the card\'s content.',
                }],
                ['Company5', {
                    name: 'Company 5',
                    id: 'cpnyID094',
                    description: 'Some quick Company 5 description text to build on the card title and make up the bulk of the card\'s content.',
                }]
            ])
        };
      }

    render(){
        return (
            <div>
                <h4>Companies</h4> <h6> - User Panel</h6>
                <div className="user-panel container-fluid row">
                    <div className="card col" style={{width: '18rem'}}>
                        {/* <img className="card-img-top" src="/assets/Logo.png" alt="Card image cap"/> */}
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>                       
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    {
                        this.state.companies.forEach((value,key,map)=> <Company name={value.name} description={value.description} />)
                    }

                </div>
                <br/>
                    <h6> - Admin Panel</h6>
                <div className="admin-panel container-fluid row">
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 13135 Compa1ny 563654</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card col" style={{width: '18rem'}}>
                        <div className="card-img-top" style={head}>Company 1</div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <CompanyUser/>
                <CompanyAdmin/>
            </div>            
        );
    }
}

const head = {
    backgroundColor:'#57689e',
    textAlign: 'center',
    color: 'white',
    fontSize: '30px'
}


const Company = (props) => {
    return (
      <div className="card col" style={{width: '18rem'}}>
          {/* <img className="card-img-top" src="/assets/Logo.png" alt="Card image cap"/> */}
          <div className="card-img-top" style={head}>props.name</div>
          <div className="card-body">
              <p className="card-text">props.description</p>
          </div>
      </div>
    )
}


export default Companies;