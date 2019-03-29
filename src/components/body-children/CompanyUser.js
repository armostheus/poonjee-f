import React, { Component } from 'react';
import SalesUser from './company-user-children/SalesUser'
import InventoryUser from './company-user-children/InventoryUser'
import PurchaseUser from './company-user-children/PurchaseUser'
import AccountsUser from './company-user-children/AccountsUser'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

class CompanyUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyId: props.details.id,
            companyName: props.details.name,
        }
    }

    render(){
        return (
            <div>
                <Route exact path="/dashboard/company-user/" render={props => (
                    <React.Fragment>
                        <h1>Welcome to {this.state.companyName} operations!</h1>
                        <h3>What are you planning to do?</h3>
                        <hr/>
                        <div className="container-fluid row">
                            <div class="card col">
                            <div class="card-header">
                                Sales
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Sales and Billing Interface</h5>
                                <p class="card-text">Integrated interface for billing of products using barcodes. Also bill items for a particular account.</p>
                                <Link to="/dashboard/company-user/sales"  style={{ textDecoration: 'none', color: 'black' }}><a href="#" class="btn btn-success">Sales >></a></Link>
                            </div>
                            </div>
                            <div class="card col">
                            <div class="card-header">
                                Inventory
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Stock and Inventory management</h5>
                                <p class="card-text">Panel to manage and update selling price of the stock present in inventory.</p>
                                <Link to="/dashboard/company-user/inventory"  style={{ textDecoration: 'none', color: 'black' }}><a href="#" class="btn btn-success">Inventory >></a></Link>
                            </div>
                            </div>
                            <div class="card col">
                            <div class="card-header">
                                Accounts
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Creating Accounts for Company</h5>
                                <p class="card-text">Create and remove accounts of your company. Accounts are helpful in managing revenue.</p>
                                <Link to="/dashboard/company-user/accounts"  style={{ textDecoration: 'none', color: 'black' }}><a href="#" class="btn btn-success">Accounts >></a></Link>
                            </div>
                            </div>
                            <div class="card col">
                            <div class="card-header">
                                Purchase
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Register/Place Order for Items</h5>
                                <p class="card-text">Log new items into inventory by adding the product info and barcode. Also place order to other profiles.</p>
                                <Link to="/dashboard/company-user/orders"  style={{ textDecoration: 'none', color: 'black' }}><a href="#" class="btn btn-success">Purchase >></a></Link>
                            </div>
                            </div>
                        </div>
                    </React.Fragment>
                )} />                

                <Route path="/dashboard/company-user/sales" render={props => (
                    <React.Fragment>
                        <SalesUser compId={this.state.companyId} compName={this.state.companyName}/>
                    </React.Fragment>
                )} />

                <Route path="/dashboard/company-user/accounts" render={props => (
                    <React.Fragment>
                        <AccountsUser compId={this.state.companyId} compName={this.state.companyName}/>
                    </React.Fragment>
                )} />

                <Route path="/dashboard/company-user/inventory" render={props => (
                    <React.Fragment>
                        <InventoryUser compId={this.state.companyId} compName={this.state.companyName}/>
                    </React.Fragment>
                )} />

                <Route path="/dashboard/company-user/orders" render={props => (
                    <React.Fragment>
                        <PurchaseUser compId={this.state.companyId} compName={this.state.companyName}/>
                    </React.Fragment>
                )} />

            </div>
        )
    }
}

export default CompanyUser;