import React, { Component } from 'react';
import './SalesUser.css';

class SalesUser extends Component{

    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    render(){
        return(
            <div style={{height:'100vh'}}>
                Sales Section - USER
                <div className="row form-panel container-fluid">
                    <div className="col-4 customer-details row">

                        <label className="control-label col-5">Customer Name :&nbsp;</label>
                        <select className="form-control form-control-sm col-7">
                            <option>Cust1</option>
                            <option>Cust1</option>
                            <option>Cust1</option>
                            <option>Cust1</option>
                        </select>

                        <label className="control-label col-5">Customer Branch :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Branch Name"></input>
                        
                        <label className="control-label col-5">Customer Address:&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Branch Address"></input>
                        
                        <label className="control-label col-5">Customer Contact :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Branch Contact"></input>
                    </div>
                    
                    <div className="col-4 company-details row">
                        <label className="control-label col-5">Branch :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Company Branch"></input>

                        <label className="control-label col-5">POS No. :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="POS/Counter No."></input>

                        <label className="control-label col-5">Username :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Your Username"></input>

                        <label className="control-label col-5">Date :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="date" placeholder="Date"></input>
                    </div>
                    
                    <div className="col-4 delivery-details row">
                        <label className="control-label col-5">Delivery :&nbsp;</label>
                        <select className="form-control form-control-sm col-7">
                            <option>Yes</option>
                            <option>No</option>
                        </select>

                        <label className="control-label col-5">Delivery Vehicle :&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Vehicle Number"></input>
                        
                        <label className="control-label col-5">Delivery By:&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder="Delivery person name"></input>
                    </div>
                </div>
                <div className="row container-fluid">
                    <div className="col-6 row">
                    </div>
                    <div className="col-3 row">
                        <label className="control-label col-5">Prev Bill&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder=""></input>
                    </div>
                    <div className="col-3 row">
                        <label className="control-label col-5">Amount&nbsp;</label>
                        <input className="form-control form-control-sm col-7" type="text" placeholder=""></input>
                    </div>                   
                </div>
                <hr/>
                <div className="container-fluid input-panel">
                <table className="table table-sm">
                    <thead>
                        <tr className="d-flex">
                        <th scope="col" className="col-1">#</th>
                        <th scope="col" className="col-2">Barcode</th>
                        <th scope="col" className="col-3">Product Name</th>
                        <th scope="col" className="col-1">Actual Price</th>
                        <th scope="col" className="col-1">Offer Price</th>
                        <th scope="col" className="col-1">Qty</th>
                        <th scope="col" className="col-1">Total</th>
                        <th scope="col" className="col-1"></th>
                        <th scope="col" className="col-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="d-flex">
                        <td className="col-1">1</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">2</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">3</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">4</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">5</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">6</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">7</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                        <tr className="d-flex">
                        <td className="col-1">8</td>
                        <td className="col-2">2332123</td>
                        <td className="col-3">Tomato-1kg</td>
                        <td className="col-1">200</td>
                        <td className="col-1">180</td>
                        <td className="col-1">3</td>
                        <td className="col-1">{3*180}</td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Edit</button></td>
                        <td className="col-1"><button type="button" className="btn btn-secondary btn-sm">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="row details-panel container-fluid">
                    <div className="">
                        Payment Mode : 
                        <div className="tab">
                            <button className="tablinks" onclick="openCity(event, 'London')">London</button>
                            <button className="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                            <button className="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
                        </div>

                        <div id="London" className="tabcontent">
                            <h3>London</h3>
                            <p>London is the capital city of England.</p>
                            </div>

                            <div id="Paris" className="tabcontent">
                            <h3>Paris</h3>
                            <p>Paris is the capital of France.</p> 
                            </div>

                            <div id="Tokyo" className="tabcontent">
                            <h3>Tokyo</h3>
                            <p>Tokyo is the capital of Japan.</p>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default SalesUser;