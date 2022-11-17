import React, { Component } from 'react'
import "./FoodTile.css"

 class FoodTile extends Component {
  addToCart =()=>{
    this.props.onAddToCart(this.props.item)
  }

  render() {
    const { item } = this.props;

    return (
      <div className="Item-Title"> 
      <div className ="item_name">{item.name}</div>
      <div className ="item_price">{item.price}</div>
      
      <button className="button button2" onClick={this.addToCart}>Add</button>
    
        
      </div>
    )
  }
}
export default FoodTile
