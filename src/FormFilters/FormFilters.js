import React, { Component } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FormFilters.css";

class FormFilters extends Component {
  state = {};
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const eachFeature = feature;

      return (
        <div key={idx}>
          <FilterItem
            id={idx}
            featureHash={featureHash}
            updateFeature={this.props.updateFeature}
            features={this.props.features}
            feature={eachFeature}
            selected={this.props.selected}
            handleCurrency={this.props.handleCurrency}
          />
        </div>
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
export default FormFilters;
