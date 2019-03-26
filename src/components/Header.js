import React, { Component } from 'react';
import Logo from '../assets/Logo.png';
import './Header.css'

class Header extends Component {
    render(){
        return (
            <div className="container-fluid" style={headerStyle}>
                <div className="row">
                    <div className="col-sm-9">stuff</div>
                    <div className="col-sm-3 user-palette">
                        <div className="row">
                            <div className="col">
                                <div className="userName">
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.name}
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Log Out</a>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div className="col">
                                Poonjee &nbsp;
                                <img src={Logo} style={logo} alt="Poonjee"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const headerStyle = {
    background: '#f4f4f5'
}
const logo = {
    borderRadius: '50%',
    height: '2.5vmax',
}

export default Header;