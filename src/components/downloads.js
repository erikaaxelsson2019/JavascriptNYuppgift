import React, { Component } from 'react';

class Downloads extends Component {
    state = {
        data : {}
    }

    componentDidMount() {
        fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
        .then(res => res.json())
        .then(data => {
            this.setState({ data: data})
        })
    }
    render() { 
        return (  
            <div className="card">
                <div className="card-body">
                    <p className="card-title">Downloads</p>
                    <p className="text-muted mb-2">Watching ice melt. This is fun. Only you could make those words cute.</p>
                    <div className="row mt-4">
                        <div className="col-md-6 stretch-card">
                            <div className="row d-flex align-items-center">
                                <div className="col-6">
                                    <div id="offlineProgress"></div>                              
                                </div>
                                <div className="col-6 pl-0">
                                    <p className="mb-0">Offline</p>
                                    <h2>45,324</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 stretch-card mt-4 mt-md-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-6">
                                    <div id="onlineProgress"></div>                              
                                </div>
                                <div className="col-6 pl-0">
                                    <p className="mb-0">Online</p>
                                    <h2>12,236</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Downloads;