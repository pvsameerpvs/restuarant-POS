import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  render() {
    const activeTable = this.props.activeTable;
    const numTables = this.props.numTables;
    const setActiveTable = this.props.setActiveTable;

    return (
      <div className="Table-Container">
        {Array.from(Array(numTables).keys()).map((x) => (
          <button
            className={"table-btn" + (activeTable === x + 1 ? " active" : "")}
            onClick={() => {
              setActiveTable(x + 1);
            }}
          >
            <h2>Table {x + 1}</h2>
          </button>
        ))}
      </div>
    );
  }
}

export default Table;
