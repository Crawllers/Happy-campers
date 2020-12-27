import React, { Component } from 'react';
import axios from 'axios';
export default class Eventsfeed extends Component {
    constructor(props){
        super(props)
        this.state = {
            joinlist: []
        }
    }
    
    async joinEvent(email, id, data){
        let buffer = data.split(',');
        console.log('buffer raw :', buffer);
        buffer.push(email)
        console.log('buffer mail :', buffer);
        let cleanbuffer = buffer.filter(unit => unit !=='')
        console.log('cleanbuffer: ', cleanbuffer);
        buffer = cleanbuffer.join(',');
        console.log('buffer final', buffer);
        axios.post('/joiningdb', {
            id: id,
            joined : buffer
        });
        window.location.reload();
    }

    async dropEvent(email, id, data){
        let buffer = data.split(',').filter(unit => unit !== email);
        console.log(buffer);
        let transfer ='';
        if(buffer[0]){
            transfer = buffer.join(',');
        }
        console.log(transfer);
        axios.post('/dropjoiningdb', {
            id: id,
            drop : transfer
        });
        window.location.reload();
    }

    render() {
        console.log(this.state.joinlist)
        const {events} = this.props
        return (
            <div>
                {events ? events.map((event, index)=>(
                    <div className="postcnt" key={index}>
                        <div className="postcntud">
                            <h3> {event.title} </h3>
                        </div>
                        <div className="postcntud">
                            <h3>Destination : {event.location}</h3>
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
                        <div className="joinarea">
                            {event.joinEvent.search(this.props.email)>=0 ? 
                            <button className="joinbtn" onClick={()=>this.dropEvent(this.props.email, event._id, event.joinEvent)}>Drop the event</button> : 
                            <button className="joinbtn" onClick={()=>this.joinEvent(this.props.email, event._id, event.joinEvent)}>Join the event</button>}
                            
                            <h4>{event.joinEvent.split(',')[0] ==='' ? '0' : event.joinEvent.split(',').length} : joined this event</h4>
                        </div>
                    </div>
                )): null}
            </div>
        )
    }
}
