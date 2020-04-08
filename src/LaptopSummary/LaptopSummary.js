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
          <SummaryItems
            handleCurrency={this.props.handleCurrency}
            selected={this.props.selected}
          />        
            <Total 
            total={this.props.total} 
            selected={this.props.selected}
            handleCurrency={this.props.handleCurrency} />
         </div>
    );
  }
}
export default LaptopSummary;
