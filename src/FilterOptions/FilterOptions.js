import React from 'react';
import slugify from 'slugify';

function FilterOptions(props){
    const { feature } = props
    console.log(feature)
    const options = props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.selected[feature].name}
              onChange={e => props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({props.handleCurrency.format(item.cost)})
            </label>
          </div>
        );
      });
      return (
          <>{options}</>
      )
}

export default FilterOptions;