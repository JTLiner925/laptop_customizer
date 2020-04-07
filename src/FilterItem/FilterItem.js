// import React, { Component } from 'react';
// import slugify from 'slugify';
// import './FilterItem.css';

//     class FilterItem extends Component {
//         state = {};
//     render() {
//         console.log(this.props)
//         const features = Object.keys(this.props.features).map((feature, idx) => {
//           const featureHash = feature + '-' + idx;

//           const options = Object.keys(this.props.features[feature]).map(item => {
//               console.log(item.cost)
//             const itemHash = slugify(JSON.stringify(item));
//             return (
//               <div key={itemHash} className="feature__item">
//                 <input
//                   type="radio"
//                   id={itemHash}
//                   className="feature__option"
//                   name={slugify(feature)}
//                   checked={item.name === this.props.selected[feature].name}
//                   onChange={e => this.props.updateFeature(feature, item)}
//                 />
//                 <label htmlFor={itemHash} className="feature__label">
//                   {item.name} ({this.props.handleCurrency.format(item.cost)})
//                 </label>
//               </div>
//             );
//           });
    
//         return (
//             <fieldset className="feature" key={featureHash}>
//               <legend className="feature__name">
//                 <h3>{feature}</h3>
//               </legend>
//               {options}
//             </fieldset>
//           );
//         });
    
//     return (
//         <form className="main__form">
//             <h2>Customize your laptop</h2>
//             {features}
//           </form>
//     )
//     }
// }
// export default FilterItem;