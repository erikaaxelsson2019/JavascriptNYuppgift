import React, { Component } from 'react';

class Invoice extends Component {
    state = {  }
    render() { 
        return (  
            <tr>
                <td>{ this.props.invoice.invoice }</td>
                <td>{ this.props.invoice.customer }</td>
                <td>{ this.props.invoice.shipping }</td>
                <td class="font-weight-bold">{ this.props.invoice.currency }{ this.props.invoice.bestPrice }</td>
                <td>{ this.props.invoice.currency }{ this.props.invoice.purchasedPrice }</td>
                <td>
                    <div class="badge badge-danger badge-fw">{ this.props.invoice.status }</div>
                </td>
            </tr> 
        );
    }
}
 
export default Invoice;