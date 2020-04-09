import React, { Component } from "react";
import "./SummaryItems.css";
import SummaryItem from "../SummaryItem/SummaryItem";

class SummaryItems extends Component {
  state = {};
  render() {
    const itemSummary = Object.keys(this.props.selected)
    const summary = itemSummary.map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <SummaryItem
        key={featureHash}
          handleCurrency={this.props.handleCurrency}
          selected={this.props.selected}
          featureHash={featureHash}
          selectedOption={selectedOption}
        />
      )
    });
    return (
      <>
        {summary}
      </>
    );
  }
}
export default SummaryItems;
