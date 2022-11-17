import React, { Component } from "react";
import OrderList from "./Component/Cart/OrderList/OrderList";
import Table from "./Component/Cart/Table/Table";
import FoodList from "./Component/ItemList/FoodList/FoodList";
import CartSummary from "./Component/ItemList/CartSummary/CartSummary";
import "./App.css";

export class App extends Component {
  state = {
    activeTable: 1,
    tableOrders: {},
  };


 
  addToCart = (item) => {
    const items = this.getActiveTableItems();

    const existingitem = items.find((x) => x.name === item.name);
    if (existingitem) {
      existingitem.qty++;
    } else {
      items.push({
        name: item.name,
        qty: 1,
        price: item.price,
      });
    }
    this.updateActiveTableOrders(items);
  };

  onIncrement = (name) => {
    const items = this.getActiveTableItems();

    const existingqty = items.find((x) => x.name === name);
    existingqty.qty++;

    this.updateActiveTableOrders(items);
  };

  onDecrement = (name) => {
    const items = this.getActiveTableItems();

    const existingqty = items.find((x) => x.name === name);
    existingqty.qty--;
    if (existingqty.qty <= 0) {
      existingqty.qty = 0;
    }

    this.updateActiveTableOrders(items);
  };

  setActiveTable = (table) => {
    this.setState({
      activeTable: table,
    });
  };

  getActiveTableItems = () => {
    const { activeTable, tableOrders } = this.state;
    return tableOrders[activeTable] || [];
  };

  updateActiveTableOrders = (items) => {
    const { activeTable, tableOrders } = this.state;

    this.setState({
      tableOrders: {
        ...tableOrders,
        [activeTable]: items,
      },
    });
  };

  render() {
    const items = this.getActiveTableItems();
    console.log("Active Table Items", items);

    return (
      <div className="app-container">
        <Table
          numTables={4}
          activeTable={this.state.activeTable}
          setActiveTable={this.setActiveTable}
        />
        <div className="app-body">
          <div>
            <OrderList
              items={items}
              Increment={this.onIncrement}
              Decrement={this.onDecrement}
            />
            <CartSummary items={items} />
          </div>
          <FoodList onAddToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
