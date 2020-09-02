import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
    logout() {
        localStorage.clear();
        window.location.href = "http://localhost:3000/home";
    }
    render() {
        var auth = JSON.parse(localStorage.getItem('auth'))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        Recat App
                    </Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">
                                    About
                                </NavLink>
                            </li>
                            {auth ?
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/list">
                                    Listing
                                </NavLink>
                            </li> : null
                            }
                        </ul>
                    </div>

                    <Link className="btn btn-outline-light mr-2" to="/post/add">Add Post</Link>
                    { !auth ? <Link className="btn btn-outline-light" to="/login">Login</Link>: <button className="btn btn-outline-light mr-2" onClick={()=> this.logout() }>Logout</button> }
                </div>
            </nav>
        );
    }
}

export default Nav;
