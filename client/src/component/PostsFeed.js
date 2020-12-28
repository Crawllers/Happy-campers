import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class PostsFeed extends Component {
    render() {
        console.log('posts from PostsFeed : ', this.props.posts)
        const {posts} = this.props
        let buffer;
        if(posts){
            buffer = posts.reverse()
        }
        return (
            <div>
                {buffer ? buffer.map((post, index) =>(
                    <div className="postcnt" key={index}>
                        <h1>{post.username}</h1>
                        <div className="postcntinto">
                        <img src={`${post.imgUrl}`} alt=""/>
                        <p>{post.text}</p>
                        </div>
                    </div>
                )): null}
            </div>
        )
    }
}
