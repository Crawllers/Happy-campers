import React, { Component } from 'react'
import data from '../data/dumData.js'
import Logo from './Logo.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
export default class Event extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: data.events,
        }
    }
    render() {
        const index = this.props.match.params.id
        const event = this.state.events[index]
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
                    <h1>{event.title}</h1>
                    <h1>Location : {event.location}</h1>
                    <h2>Coordinator : {event.userName}</h2>
                    <h2>Date of departure : {event.date}</h2>
                    <img src={`${event.imgUrl}`} alt=""/>
                    <p>{event.text}</p>
                </div>
            </div>
        )
    }
}