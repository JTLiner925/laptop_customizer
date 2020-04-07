import React, { Component } from "react";
import "./SummaryItem.css";

class SummaryItem extends Component {
  state = {};
  render() {
    console.log(this.props);
    const itemSummary = Object.keys(this.props.selected)
    const summary = itemSummary.map((feature, idx) => {
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
    return(
        <div>{summary}</div>
    )
  }
}
export default SummaryItem;
