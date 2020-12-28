import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Logo from './Logo.js'
const axios=require('axios')

class Login extends Component {
    constructor(props){
      super(props)
       this.state={
           email:"",
           password:""
       }
    }
    
//axios call to the database to check the login data
async login(){
    await axios.post('/login', {
        email : this.state.email,
        pass: this.state.password
    }).then(function (response) {
        console.log(response)
        if(response.data.status === 'successLogg'){
            document.cookie = `username=${response.data.useremail},${response.data.username}`;
        }
      })
      window.location.replace("/");
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
                  <Link className="nodec" to="/signup">
                    <h1>Signin</h1>
                  </Link>
              </div>
      </nav>
    <div className="mainloginput">
      <h1>Login</h1>
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
      <button className="joinbtn btnlog" onClick={this.login.bind(this)}>Submit</button>
    </div>
    </div>
  );
}
}
export default Login;