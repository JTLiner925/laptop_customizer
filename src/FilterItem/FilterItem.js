import React, { Component } from "react";
import FilterOptions from '../FilterOptions/FilterOptions';
import "./FilterItem.css";

class FilterItem extends Component {
  state = {};
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FilterOptions
          features={this.props.features} 
          feature={feature}
          handleCurrency={this.props.handleCurrency}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          />
        </fieldset>
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
export default FilterItem;
