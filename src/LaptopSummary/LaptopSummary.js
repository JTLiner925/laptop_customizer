import React, { Component } from "react";
import Total from "../Total/Total";
import "./LaptopSummary.css";
import SummaryItems from "../SummaryItems/SummaryItems";

class LaptopSummary extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Your cart</h2>
        <div>
          <SummaryItems
            handleCurrency={this.props.handleCurrency}
            selected={this.props.selected}
          />
        </div>
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            <Total total={this.props.total} selected={this.props.selected} />
          </div>
        </div>
      </div>
    );
  }
}
export default LaptopSummary;
