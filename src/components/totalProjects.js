import React, { Component } from 'react';

class TotalProjects extends Component {
    state = {  
        data: {}
    }

    componentDidMount() {
        fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
        .then(res => res.json())
        .then(data => {
            this.setState({ data: data})
        })
    }

    render() { 
        return (  
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Projects</p>
                        <div className="d-flex flex-wrap align-items-baseline">
                            <h2 className="mr-3">{this.state.data.projects}</h2>
                            <i className="mdi mdi-arrow-up mr-1 text-success"></i><span><p className="mb-0 text-success font-weight-medium">+9.12%</p></span>                          
                        </div>
                        <p className="mb-0 text-muted">Total users world wide</p>
                    </div>
                <canvas id="projects-chart"></canvas>
                </div>
            </div>
        );
    }
}
 
export default TotalProjects;