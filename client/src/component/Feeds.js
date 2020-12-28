import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Logo from './Logo.js';
import PostsFeed from './PostsFeed.js'
import Eventsfeed from './Eventsfeed.js'
import Myposts from './Myposts.js'
import Myevents from './Myevents.js'

export default class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch : 'allposts',
        }
    }

    logout(){
        document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.replace("/");
      }
    
    render() {
        // console.log('feeds events props :',this.props.events)
        return (
            <div>
                <nav className="navigation nav_fix">
                    <Link to="/">
                    <Logo></Logo>
                    </Link>
                    <div>
                        <Link  className="nodec" to="/createpost">
                        <h1>Create Post</h1>
                        </Link>
                        <Link className="nodec" to="/createevent">
                        <h1>Create Event</h1>
                        </Link>
                        <h1>Welcome {this.props.name}</h1>
                        <h1 onClick={()=>this.logout()}>Logout</h1>
                    </div>
                </nav>
                <div className="feedscontainer">
                    <div>
                        <button className={this.state.switch === 'allposts' ? "btn_feeds selected" : "btn_feeds"} onClick={()=> this.setState({switch:'allposts'})}>Posts</button>
                        <button className={this.state.switch === 'myposts' ? "btn_feeds selected" : "btn_feeds"} onClick={()=> this.setState({switch: 'myposts'})}>My posts</button>
                        <button className={this.state.switch === 'events' ? "btn_feeds selected" : "btn_feeds"} onClick={()=> this.setState({switch: 'events'})}>Events</button>
                        <button className={this.state.switch === 'myevents' ? "btn_feeds selected" : "btn_feeds"} onClick={()=> this.setState({switch: 'myevents'})}>My events</button>
                    </div>
                    {this.state.switch === 'allposts' ? <PostsFeed  posts={this.props.posts}></PostsFeed> : null}
                    {this.state.switch === 'myposts' ? <Myposts  posts={this.props.posts}email={this.props.email}></Myposts> : null}
                    {this.state.switch === 'events' ? <Eventsfeed  events={this.props.events} email={this.props.email}></Eventsfeed> : null}
                    {this.state.switch === 'myevents' ? <Myevents  events={this.props.events} email={this.props.email}></Myevents> : null}
                    
                </div>
            </div>
        )
    }
}

/*<Eventsfeed events={this.props.data.events}></Eventsfeed> */