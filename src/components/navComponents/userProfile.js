import React, { Component } from 'react';

class UserProfile extends Component {
    state = {  }
    render() { 
        return (  
            <li className="nav-item nav-profile dropdown mr-0 mr-sm-2">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="https://via.placeholder.com/40x40" alt="profile"/>
              <span className="nav-profile-name">Don Richards</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item">
                <i className="mdi mdi-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item">
                <i className="mdi mdi-logout text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        );
    }
}
 
export default UserProfile;