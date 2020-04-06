import React, { Component } from "react";
// import Total from '../Total/Total';
import "./LaptopSummary.css";
// import SummaryItems from "../SummaryItems/SummaryItems";

class LaptopSummary extends Component {
    state ={}
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.handleCurrency.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>Your cart</h2>
        <div>
        {summary}
        {/* <SummaryItems /> */}
        </div>
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
          {this.props.total}
          </div>
        </div>
      </div>
    );
  }
}
export default LaptopSummary;
