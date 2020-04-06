import React, { Component } from 'react';
import slugify from 'slugify';
import './FormFilters.css';

class FormFilters extends Component {
    render() {
        const features = this.props.features.map((feature, idx) => {
          const featureHash = feature + '-' + idx;

          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.state.selected[feature].name}
                  onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} {this.props.handleCurrency}
                </label>
              </div>
            );
          });
    
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
    
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    )
    }
}
export default FormFilters;