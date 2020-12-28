import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Logo from './Logo.js';
const axios=require('axios')

export default class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            location: '',
            telnum: '',
            date: '',
            image: '',
            text: '',
        }
    }

    createEvent() {
        axios.post('/createeventdb', {
            username: this.props.username,
            useremail: this.props.useremail,
            title : this.state.title,
            location: this.state.location,
            telnum: this.state.telnum,
            date: this.state.date,
            image: this.state.image,
            text: this.state.text
        });
        window.location.replace("/feeds");
    }

    render() {
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
                        <h1>{this.props.username} call for Adventure</h1>
                    </div>
                </nav>
                <div className="postcnt">
                <hr></hr>
                <hr></hr>
                <hr></hr>
                Event title: 
                    <input className="postcntinput" type="text" name="titleEvent" placeholder="Event Title" onChange={(e)=>{this.setState({title:e.target.value})}}/>
                    <hr></hr>
                Event location
                    <input className="postcntinput" type="text" name="locationEvent" placeholder="Enter the location" onChange={(e)=>{this.setState({location:e.target.value})}}/>
                    <hr></hr>
                Organiser phone number:
                    <input className="postcntinput" type="text" name="telnum" placeholder="Enter phone number" onChange={(e)=>{this.setState({telnum:e.target.value})}}/>
                    <hr></hr>
                Event departure Date:
                    <input className="postcntinput" type="date" name="dateEvent" placeholder="enter image URL link" onChange={(e)=>{this.setState({date:e.target.value})}}/>
                    <hr></hr>
                Image Url:
                    <input className="postcntinput" type="text" name="imageUrlEvent" placeholder="enter image URL link" onChange={(e)=>{this.setState({image:e.target.value})}}/>
                    <hr></hr>
                Make us heed your call for adventure !
                    <textarea name="textEvent" cols="50" rows="5" onChange={(e)=>{this.setState({text:e.target.value})}}></textarea>
                    <button onClick={this.createEvent.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
