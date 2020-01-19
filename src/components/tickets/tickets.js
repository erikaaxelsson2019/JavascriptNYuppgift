import React, { Component } from 'react';
import Ticket from './ticket';

class Tickets extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            tickets: []
        }
    }

    componentDidMount() {
        fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
        .then(res => res.json())
        .then(data => {
            this.setState({tickets: data});
        })
    }
   
    render() { 
        return (  
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-md-end flex-wrap">
                        <p className="card-title">Tickets</p>
                        <div className="dropdown mb-3 mb-md-0">
                            <button className="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                2018
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate1">
                                <a className="dropdown-item" href="#">2015</a>
                                <a className="dropdown-item" href="#">2016</a>
                                <a className="dropdown-item" href="#">2017</a>
                                <a className="dropdown-item" href="#">2018</a>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table tickets-table mb-2">
                        <thead>
                            <th className="text-muted pl-0">
                            Name
                            </th>
                            <th></th>
                            <th className="text-muted">
                            Date
                            </th>
                            <th className="text-muted">
                            Projects
                            </th>
                        </thead>
                        <tbody>

                            <tr>
                                <td className="pl-0">
                                    <div className="icon-rounded-primary icon-rounded-md">
                                        <h4 className="font-weight-medium">AL</h4>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0">Alta Lucas</p>
                                    <p className="text-muted mb-0">Connecticut</p>
                                </td>
                                <td>
                                    <p className="mb-0">31 Aug 2018</p>
                                    <p className="text-muted mb-0">9:30 am</p>
                                </td>
                                <td>
                                    <p className="mb-0">6770 Verner Burgs</p>
                                    <p className="text-muted mb-0">View on map</p>
                                </td>
                                <td className="pr-0">
                                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                                </td>
                            </tr>

                            <tr>
                                <td className="pl-0">
                                    <div className="icon-rounded-info icon-rounded-md">
                                        <h4 className="font-weight-medium">TS</h4>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0">Teresa Shaw</p>
                                    <p className="text-muted mb-0">Florida</p>
                                </td>
                                <td>
                                    <p className="mb-0">13 May 2018</p>
                                    <p className="text-muted mb-0">10:30 am</p>
                                </td>
                                <td>
                                    <p className="mb-0">1300 Gideon Divide Apt. 400</p>
                                    <p className="text-muted mb-0">Start session</p>
                                </td>
                                <td className="pr-0">
                                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                                </td>
                            </tr>

                            <tr>
                                <td className="pl-0">
                                    <div className="icon-rounded-danger icon-rounded-md">
                                    <h4 className="font-weight-medium">RU</h4>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0">Rosa Underwood</p>
                                    <p className="text-muted mb-0">North Dakota</p>
                                </td>
                                <td>
                                    <p className="mb-0">02 Jan 2018</p>
                                    <p className="text-muted mb-0">11:00 am</p>
                                </td>
                                <td>
                                    <p className="mb-0">9576 Rempel Extension</p>
                                    <p className="text-muted mb-0">End session</p>
                                </td>
                                <td className="pr-0">
                                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                                </td>
                            </tr>

                            <tr>
                                <td className="pl-0">
                                    <div className="icon-rounded-warning icon-rounded-md">
                                    <h4 className="font-weight-medium">VR</h4>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0">Vilson Rowa</p>
                                    <p className="text-muted mb-0">Densar</p>
                                </td>
                                <td>
                                    <p className="mb-0">05 Nov 2018</p>
                                    <p className="text-muted mb-0">02:30 am</p>
                                </td>
                                <td>
                                    <p className="mb-0">1072 Orion Expansion</p>
                                    <p className="text-muted mb-0">On Way</p>
                                </td>
                                <td className="pr-0">
                                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                                </td>
                            </tr>

                            <tr>
                                <td className="pl-0">
                                    <div className="icon-rounded-info icon-rounded-md">
                                    <h4 className="font-weight-medium">TS</h4>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-0">Teresa Shaw</p>
                                    <p className="text-muted mb-0">Florida</p>
                                </td>
                                <td>
                                    <p className="mb-0">13 May 2018</p>
                                    <p className="text-muted mb-0">10:30 am</p>
                                </td>
                                <td>
                                    <p className="mb-0">1300 Gideon Divide Apt. 400</p>
                                    <p className="text-muted mb-0">Start session</p>
                                </td>
                                <td className="pr-0">
                                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                                </td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                </div>  
            </div>
        );
    }
}
 
export default Tickets;