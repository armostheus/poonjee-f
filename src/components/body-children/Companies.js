import React, { Component } from 'react';

import CompanyUser from './CompanyUser';
import CompanyAdmin from './CompanyAdmin';

class Companies extends Component {
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

export default Companies;