import axios from 'axios';
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




export default class Myposts extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            edittext: ''
        }
    }

    deltePost(options) {
        axios.post('/deletepostdb', {
            id : options
        });
        window.location.reload();
    }

    uptadePost(search, uptade){
        axios.post('/updatepostdb', {
            id : search,
            change : uptade
        })
        window.location.reload();
    }

    render() {
        console.log('posts from PostsFeed : ', this.props.posts)
        const {posts} = this.props
         let filterred;
         let buffer;
        if(posts){
            filterred = posts.filter(post => post.useremail === this.props.email)
            buffer = filterred.reverse();
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
                        <div className="postcntud">
                            <h2 className="mypost" onClick={()=> this.setState({edit: !this.state.edit})}>Edit text</h2>
                            <h2 className="mypost" onClick={()=>this.deltePost(post._id)}>Delete post</h2>
                        </div>
                        <div className={!this.state.edit ? "hide": "interlogs"}>
                        <textarea cols="50" rows="2" onChange={(e)=>{this.setState({edittext:e.target.value})}}></textarea>
                        <button onClick={()=>this.uptadePost(post._id, this.state.edittext)}>Submit</button>
                        </div>
                    </div>
                )): null}
            </div>
        )
    }
}
