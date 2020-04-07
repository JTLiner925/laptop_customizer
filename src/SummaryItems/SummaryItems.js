import React, { Component } from "react";
// import Total from '../Total/Total';
import "./SummaryItems.css";

class SummaryItems extends Component {
  state = {};
  render() {
    console.log(this.props);
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
    return <div>{summary}</div>;
  }
}
export default SummaryItems;
