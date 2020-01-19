import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {

    constructor(props) {
        super(props);

        this.state = {  
            messages: []
        }
    }

    componentDidMount() {
        fetch("https://inlupp-fa.azurewebsites.net/api/messages")
        .then(res => res.json())
        .then(data => {
            this.setState({messages : data});
        })
    }
    
    render() { 
        return (  
            <div>
                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                    <i className="mdi mdi-email mx-0"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>

                    { this.state.messages.map((message) => (<Message key={message.from} message={message} />)) }
                </div>
            </div>
        );
    }
}
 
export default Messages;