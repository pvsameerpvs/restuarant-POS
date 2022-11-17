import React, { Component } from "react";
import "./FoodList.css";
import FoodTile from "../FoodTile/FoodTile";

class FoodList extends Component {
  state = {
    items: [
      {
        name: "biriyani",
        price: 100,
      },
      {
        name: "alfaham",
        price: 130,
      },
      {
        name: "thandhoori",
        price: 120,
      },
      {
        name: "shawarma",
        price: 100,
      },
      {
        name: "protta",
        price: 30,
      },
      {
        name: "mutton grill",
        price: 200,
      },
      {
        name: "shawrma roll",
        price: 100,
      },
    ],
  };

  render() {
    const {items}=this.state;
    return (
      <div className="FoodItem-container">
        <b>Food Items</b>
        <ul>
          {items.map((item) => (
            <FoodTile key={item.name} item={item}onAddToCart={this.props.onAddToCart}/>
           
          ))}
        </ul>
      </div>
    );
  }
}

export default FoodList;
