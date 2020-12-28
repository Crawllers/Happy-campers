import axios from 'axios';
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




export default class Myevents extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            edittext: ''
        }
    }

    delteEvent(options) {
        axios.post('/deleteeventdb', {
            id : options
        });
        window.location.reload();
    }


    render() {
        console.log('posts from PostsFeed : ', this.props.events)
        const {events} = this.props
        let filterred;
        let buffer;
        if(events){
            filterred = events.filter(event => event.useremail === this.props.email)
            console.log(filterred);
            buffer = filterred.reverse()
        }
        
        return (
            <div>
                {buffer ? buffer.map((event, index) =>(
                    <div className="postcnt" key={index}>
                        
                        <h1>{event.title}</h1>
                        
                        <div className="postcntud">
                            <h3>Destination : {event.location} </h3>
                            <h3>Date departure : {event.date}</h3>
                        </div>
                        <div className="postcntud">
                            <h3>Orginised By : {event.username}</h3>
                            <h3>Telephone : {event.telephone}</h3>
                        </div>
                        <div className="postcntinto">
                            <img src={`${event.imgUrl}`} alt=""/>
                            <p>{event.text}</p>
                        </div>
                        <div className="postcntud">
                            <h2 className="mypost" onClick={()=>this.delteEvent(event._id)}>Delete Event</h2>
                            <h2>number of participants : {event.joinEvent.split(',')[0] ==='' ? '0' : event.joinEvent.split(',').length}</h2>
                        </div>
                    </div>
                )):<div className="postcnt"><h1>You Have no events organised by you</h1></div>}
            </div>
        )
    }
}
