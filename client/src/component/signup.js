import React, { Component } from 'react';
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
}

  render(){
  return (
    <div>
    username: <input type='text' onChange={(e)=>{this.setState({username:e.target.value})}} />
    email: <input type='text'  onChange={(e)=>{this.setState({email:e.target.value})}}/>
    password: <input type='password'  onChange={(e)=>{this.setState({password:e.target.value})}}/>
    <button onClick={this.signup.bind(this)}>submit</button>
    </div>
  );
}
}
export default Signup;