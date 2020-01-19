import React, { Component } from 'react';

class TotalSalesMonth extends Component {
    state = {  
        data : {}
    }

    componentDidMount() {
        fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
        .then(res => res.json())
        .then(data => {
            this.setState({ data: data})
        })
    }
    render() { 
        return (  
            <div className="col-md-3 grid-margin stretch-card">
                <div className="card border-0 border-radius-2 bg-success">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                            <div className="icon-rounded-inverse-success icon-rounded-lg">
                                <i className="mdi mdi-arrow-top-right"></i>
                            </div>
                            <div className="text-white">
                            <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Sales</p>
                                <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                                    <h3 id="total-sales-amount" className="mb-0 mb-md-1 mb-lg-0 mr-1">{this.state.data.sales}</h3>
                                    <small className="mb-0">This month</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TotalSalesMonth;