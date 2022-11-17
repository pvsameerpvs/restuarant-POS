import React, { Component } from "react";
import "./OrderList.css";

class OrderList extends Component {
  render() {
    return (
      <div>
        <div className="OrderList-container">
          <h1>Order List</h1>

          
          <div className="list-tbody">
            <table className="list-tbody">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>
                    <b>-</b>
                  </th>
                  <th>Quantity</th>
                  <th>
                    <b>+</b>
                  </th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.props.items.map((x) => (
                  <tr>
                    <td>{x.name}</td>


                    <td>
                      <button
                        className="button-1"
                        onClick={this.props.Decrement.bind(this, x.name)}
                      >
                        -
                      </button>
                    </td>
                  
                    <td>{x.qty}</td>
                    <td>
                      <button
                        className="button-1"
                        onClick={this.props.Increment.bind(this, x.name)}
                      >
                        +
                      </button>
                    </td>
                    
                    <td>₹{x.price}</td>
                    <td>
                      <div>₹{x.qty * x.price}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderList;
