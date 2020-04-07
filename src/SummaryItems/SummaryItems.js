import React, { Component } from "react";
import "./SummaryItems.css";
import SummaryItem from "../SummaryItem/SummaryItem";

class SummaryItems extends Component {
  state = {};
  render() {
    return (
      <div>
        <SummaryItem
          handleCurrency={this.props.handleCurrency}
          selected={this.props.selected}
        />
      </div>
    );
  }
}
export default SummaryItems;
