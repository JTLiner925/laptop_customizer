import React, { Component } from "react";
// import slugify from 'slugify';
import "./Total.css";

class Total extends Component {
  state = "";
  render() {
    const grandTotal = Object.keys(this.props.selected);
    return (
      <div>
        {grandTotal.reduce(
          (acc, curr) => acc + this.props.selected[curr].cost,
          0
        )}
      </div>
    );
  }
}
export default Total;
