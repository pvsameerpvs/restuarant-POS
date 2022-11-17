import React, { Component } from "react";
import "./CartSummary.css";

class CartSummary extends Component {
  total = () => {
    return this.props.items.reduce(
      (previousValue, x) => previousValue + x.qty * x.price,
      0
    );
  };
  gst = () => {
    return (this.total() * 5) / 100;
  };

  GrandTotal = () => {
    return this.total() + this.gst();
  };

  render() {
    return (
      <div className="Summary">
       
        <div className="total-contaner">
        <h4>GRAND TOATAL</h4>
        <table className="grand-total-table">
            
          <tr>
            <th>
              <h6>total</h6>
            </th>
            <td> ₹{this.total()}</td>
          </tr>

          <tr>
            <th>
              <h6>GST</h6>
            </th>
            <td> ₹{this.gst()}</td>
          </tr>

          <tr>
            <th>
              <h1>Grand Total</h1>
            </th>
            <td> ₹{this.GrandTotal()}</td>
          </tr>
         
        </table>
        </div>
      </div>
    );
  }
}

export default CartSummary;
