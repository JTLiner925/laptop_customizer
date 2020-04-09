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

      // return (
      //   <div className="summary__option" key={featureHash}>
      //     <div className="summary__option__label">{feature} </div>
      //     <div className="summary__option__value">{selectedOption.name}</div>
      //     <div className="summary__option__cost">
      //       {this.props.handleCurrency.format(selectedOption.cost)}
      //     </div>
      //   </div>
      // );
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
