import React, { Component } from 'react';
import './App.css';
import Hello from './component/hello'
import Signup from './component/signup.js'
import Login from './component/login.js'
class App extends Component {
  constructor(){
    super()
    this.state={
      logedin: false,
      username: ''
    }
  }

  componentDidMount(){
    if(document.cookie){
      this.setState({logedin: true});
    }
  }
  render(){
  return (
    <div className="App">
      {this.state.logedin ? <Hello /> : <Login />}
    
    </div>
  );
}
}
export default App;
