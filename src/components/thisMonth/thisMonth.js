import React, { Component } from 'react';
import TotalSalesMonth from './totalSalesMonth';
import TotalPurchases from './totalPurchases';
import TotalOrders from './totalOrders';
import TotalGrowth from './totalGrowth';

class ThisMonth extends Component {
    state = {  }
    render() { 
        return (  
            <div className="row">
                <TotalSalesMonth />

                <TotalPurchases />

                <TotalOrders />

                <TotalGrowth />
            </div>   
        );
    }
}
 
export default ThisMonth;