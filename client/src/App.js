import React, { Component } from 'react';
import './App.css';

import Signup from './component/signup.js'
import Login from './component/login.js'
import Landing from './component/Landing.js'
import Feeds from './component/Feeds.js'
import CreateEvent from './component/CreateEvent.js'
import CreatePost from './component/CreatePost.js'
import Post from './component/Post.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//require calls
const axios=require('axios')
class App extends Component {
  constructor(){
    super()
    this.state={
      logedin: false,
      useremail: '',
      username: '',
      allposts: null,
      allevents: null
    }
  }

  async componentDidMount(){
    if(!this.state.logedin){
      this.setState({username: '', useremail: ''});
    }
    let cleancookies = document.cookie.replace('username=', '');
    console.log(cleancookies)
    let arrayuser = cleancookies.split(',');
    console.log(arrayuser)
    if(document.cookie){
     await this.setState({logedin: true, useremail: arrayuser[0], username: arrayuser[1]});
      await axios.get('/postsdb').then(res => {
        this.setState({allposts : res.data});
      })
      await axios.get('/eventsdb').then(res => {
        this.setState({allevents : res.data});
      })
    }
    console.log(this.state);
  }
  render(){
  return (
    <div className="App">
      <Router>
          <Route path="/" exact>
            {this.state.logedin ? <Redirect to="/feeds"/> : <Landing></Landing>}
          </Route>
          <Route path="/feeds" exact>
            {!this.state.logedin ? <Redirect to="/"/> : <Feeds name={this.state.username} email={this.state.useremail} posts={this.state.allposts} events={this.state.allevents}></Feeds>}
          </Route>
          <Route path="/signup" exact>
            <Signup></Signup>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/createpost" exact>
            <CreatePost username={this.state.username} useremail={this.state.useremail}></CreatePost>
          </Route>
          <Route path="/createevent" exact>
            <CreateEvent username={this.state.username} useremail={this.state.useremail}></CreateEvent>
          </Route>
          {/* <Route path="/post/:id" exact component={Post}/> */}
          {/* <Route path="/event/:id" exact component={Event}/> */}
      </Router>
    </div>
  );
}
}
export default App;
