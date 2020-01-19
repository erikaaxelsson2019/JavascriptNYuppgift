import React, { Component } from 'react';
import UserProfile from './userProfile';
import Messages from './messages/messages';
import Notifications from './notifications/notifications';

class Nav extends Component {
    state = {  }
    render() { 
        return (  
            <nav className="navbar top-navbar col-lg-12 col-12 p-0">
              <div className="container">
                <div className="navbar-menu-wrapper d-flex align-items-center">
                  <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown mr-1">

                        <Messages />

                    </li>

                    <li className="nav-item dropdown mr-4">
                      
                      <Notifications />

                    </li>
                   
                    <UserProfile />

                  </ul>
                  <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                    <span className="mdi mdi-menu"></span>
                  </button>
                </div>
              </div>
            </nav>
        );
    }
}
 
export default Nav;