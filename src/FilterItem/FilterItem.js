import React from "react";
import FilterOptions from '../FilterOptions/FilterOptions';
import "./FilterItem.css";

function FilterItem(props){
      return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          <FilterOptions
          id={props.featureHash}
          featureHash={props.featureHash}
          features={props.features} 
          feature={props.feature}
          handleCurrency={props.handleCurrency}
          updateFeature={props.updateFeature}
          selected={props.selected}
          />
        </fieldset>
      );
    }

export default FilterItem;
