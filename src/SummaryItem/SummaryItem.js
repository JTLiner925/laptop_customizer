import React from "react";
import "./SummaryItem.css";

// class SummaryItem extends Component {
  function SummaryItem(props){
  // state = {};
  // render() {
    // const itemSummary = Object.keys(this.props.selected)
    // const summary = itemSummary.map((feature, idx) => {
    //   const featureHash = feature + "-" + idx;
    //   const selectedOption = this.props.selected[feature];

      return (
        <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.handleCurrency.format(props.selectedOption.cost)}
          </div>
        </div>
      );
    // };
    // return(
    //     <div>{summary}</div>
    // )
  }

export default SummaryItem;
