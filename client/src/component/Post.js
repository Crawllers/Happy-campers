import React, { Component } from 'react'
import Logo from './Logo.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const axios=require('axios')

export default class Post extends Component {
    constructor(props){
        super(props)
    }

    render() {
        // let index = this.props.match.params.id;
        // let post;
        // if(this.state.posts){
        //     post = this.state.posts[index]
        // }

        console.log(this.props);
        
        return (
            <div>
                <nav className="navigation nav_fix">
                    <Link to="/">
                    <Logo></Logo>
                    </Link>
                    <div>
                        <Link className="nodec" to='/feeds'>
                        <h1>Main feed</h1>
                        </Link>
                        <Link className="nodec" to="/createpost">
                        <h1>Create Post</h1>
                        </Link>
                        <Link className="nodec" to="/createevent">
                        <h1>Create Event</h1>
                        </Link>
                    </div>
                </nav>
                <div className="postcnt">
                    {/* <h1>{post.userName}</h1>
                    <img src={`${post.imgUrl}`} alt=""/>
                    <p>{post.text}</p> */}
                </div>
            </div>
        )
    }
}