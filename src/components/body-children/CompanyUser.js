import React, { Component } from 'react';
import SalesUser from './company-user-children/SalesUser'
import InventoryUser from './company-user-children/InventoryUser'
import PurchaseUser from './company-user-children/PurchaseUser'
import AccountsUser from './company-user-children/AccountsUser'

class CompanyUser extends Component {
    render(){
        return (
            <div>
                <h1>Hi Shubham Chakraborty</h1>
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
                        <a href="#" class="btn btn-success">Sales >></a>
                    </div>
                    </div>
                    <div class="card col">
                    <div class="card-header">
                        Inventory
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Stock and Inventory management</h5>
                        <p class="card-text">Panel to manage and update selling price of the stock present in inventory.</p>
                        <a href="#" class="btn btn-success">Inventory >></a>
                    </div>
                    </div>
                    <div class="card col">
                    <div class="card-header">
                        Accounts
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Creating Accounts for Company</h5>
                        <p class="card-text">Create and remove accounts of your company. Accounts are helpful in managing revenue.</p>
                        <a href="#" class="btn btn-success">Accounts >></a>
                    </div>
                    </div>
                    <div class="card col">
                    <div class="card-header">
                        Purchase
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Register/Place Order for Items</h5>
                        <p class="card-text">Log new items into inventory by adding the product info and barcode. Also place order to other profiles.</p>
                        <a href="#" class="btn btn-success">Purchase >></a>
                    </div>
                    </div>
                </div>

                <AccountsUser/>
                <InventoryUser/>
                <PurchaseUser/>
                <SalesUser/>

            </div>
        )
    }
}

export default CompanyUser;