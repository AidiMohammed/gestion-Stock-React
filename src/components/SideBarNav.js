import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBarNav.css';

function SideBarNav() {
    return (
        <div>
            <div className="sidebar">
                <NavLink className="navlink" exact to="/" activeClassName="selected">
                    <i className="fa fa-home" aria-hidden="true"></i>Dashboard
                </NavLink>
                <NavLink className="navlink" exact to="/addnewcustomer" activeClassName="selected">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>Add New Customer
                </NavLink>
                <NavLink className="navlink" exact to="/addnewproduct" activeClassName="selected">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>Add New Product
                </NavLink>
                <NavLink className="navlink" exact to="/addnewprovaider" activeClassName="selected">
                    <i className="fa fa-id-card" aria-hidden="true"></i>Add New Provider
                </NavLink>
            </div>
        </div>
    )
}

export default SideBarNav
