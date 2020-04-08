import React, { Component } from "react";
import "./Total.css";

class Total extends Component {
  state = "";
  render() {
    const grandTotal = Object.keys(this.props.selected);
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.handleCurrency.format(
            grandTotal.reduce(
              (acc, curr) => acc + this.props.selected[curr].cost,
              0
            )
          )}
        </div>
      </div>
    );
  }
}
export default Total;
