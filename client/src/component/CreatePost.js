import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Logo from './Logo.js'
const axios=require('axios')

export default class CreatePost extends Component {
    constructor(props){
        super(props)
         this.state={
             image:"",
             textDsc:""
         }
      }

      createpost(){
        axios.post('/createpost',{
            username:this.props.username,
            emailusername:this.props.useremail,
            image:this.state.image,
            textDsc: this.state.textDsc
        })
        window.location.replace("/feeds");
      }

      logout(){
        document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.replace("/");
      }
    render() {
        return (
            <div>
                <nav className="navigation nav_fix">
                    <Link  to="/">
                    <Logo></Logo>
                    </Link>
                    
                    <div>
                        <Link className="nodec" to='/feeds'>
                        <h1>Main feed</h1>
                        </Link>
                        <Link className="nodec" to="/createevent">
                        <h1>Create Event</h1>
                        </Link>
                        <h1>{this.props.username} write your adventure</h1>
                    </div>
                </nav>
                <div className="postcnt">
                    <input type="text" placeholder="enter image URL link" onChange={(e)=>{this.setState({image:e.target.value})}}/>
                    <textarea name="textPost" onChange={(e)=>{this.setState({textDsc:e.target.value})}}></textarea>
                    <button onClick={this.createpost.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
