import React, { Component } from "react";
import FilterItem from '../FilterItem/FilterItem';
import "./FormFilters.css";

class FormFilters extends Component {
  state = {};
  render() {
    return (
      <div>
        <FilterItem 
            updateFeature={this.props.updateFeature}
            features={this.props.features}
            selected={this.props.selected}
            handleCurrency={this.props.handleCurrency}/>
      </div>
    );
  }
}
export default FormFilters;
