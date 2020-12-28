import React, { Component } from 'react';
import Logo from './Logo.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios=require('axios')


class Signup extends Component {
    constructor(props){
      super(props)
       this.state={
           username:"",
           email:"",
           password:""
       }
}
    
async signup(){
  await axios.post('/sign',{
    username:this.state.username,
    email:this.state.email,
    password:this.state.password
  })
  window.location.replace("/login");
}

  render(){
  return (
    <div>
        <nav className="navigation">
                    <Link to="/">
                    <Logo></Logo>
                    </Link>
                <div>
                    <Link className="nodec" to="/">
                    <h1>Home</h1>
                    </Link>
                    <Link className="nodec" to="/login">
                    <h1>Login</h1>
                    </Link>
                </div>
                </nav>
                <div className="mainloginput">
                <h1>Signup</h1>
                <div className="interlogs">
                username: <input type='text' onChange={(e)=>{this.setState({username:e.target.value})}}/>
                </div>
                <hr></hr>
                <div className="interlogs">
                email: <input type='text'  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                </div>
                <hr></hr>
                <div className="interlogs">
                password: <input type='password'  onChange={(e)=>{this.setState({password:e.target.value})}}/>
                </div>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <button className="joinbtn btnlog" onClick={this.signup.bind(this)}>submit</button>
                </div>
    </div>
  );
}
}
export default Signup;