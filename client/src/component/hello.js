import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Hello extends Component {
  constructor(props) {
    super(props);
  }
 logout(){
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.replace("/");
  }

  render(){
  return (
    <div className="App">
      <h1>helooooooooooooo {this.props.name}</h1>
      <button onClick={()=>this.logout()}>logout</button>
    </div>
  );
}
}
export default Hello;