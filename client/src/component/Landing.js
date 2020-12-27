import React, { Component } from 'react'
//call tools
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//call component
import Logo from './Logo.js'

export default class Landing extends Component {
    render() {
        return (
        <div>
            <nav className="navigation">
                    <Link to="/">
                    <Logo></Logo>
                    </Link>
                <div>
                    <Link className="nodec" to="/login">
                    <h1>Login</h1>
                    </Link>
                    <Link className="nodec" to="/signup">
                    <h1>Signin</h1>
                    </Link>
                </div>
            </nav>
            <div className="landing">
                <Link  className="nodec" to='/signup'>
                <button className="btn_joion">Join US</button>
                </Link>
            </div>
        </div>
        )
    }
}