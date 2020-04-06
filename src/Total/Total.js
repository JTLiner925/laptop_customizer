import React, { Component } from 'react';
// import slugify from 'slugify';
import './Total.css';

class Total extends Component {
    state = ''
    render(){
        return (
            <div>
        {Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    )}
           </div>           
        )
    }
}
export default Total;
// const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );