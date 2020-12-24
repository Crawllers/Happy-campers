import React, { Component } from 'react';
const axios=require('axios')

class Login extends Component {
    constructor(props){
      super(props)
       this.state={
           email:"",
           password:""
       }
    }
    

async login(){
    await axios.post('/login', {
        email : this.state.email,
        pass: this.state.password
    }).then(function (response) {
        console.log(response)
        if(response.data.status === 'successLogg'){
            document.cookie = `username=${response.data.username}`;
        }
      })
}

  render(){
  return (
    <div>
    email:<input type='text'  onChange={(e)=>{this.setState({email:e.target.value})}}/>
    password:<input type='password'  onChange={(e)=>{this.setState({password:e.target.value})}}/>
    <button onClick={this.login.bind(this)}>Submit</button>
    </div>
  );
}
}
export default Login;