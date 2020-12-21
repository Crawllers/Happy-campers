import React, { Component } from 'react';
import './App.css';
import Hello from './component/hello'
class App extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }
  render(){
  return (
    <div className="App">
  <Hello />
    </div>
  );
}
}
export default App;
