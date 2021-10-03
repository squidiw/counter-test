import React, { Component } from 'react';

// Counter Component
class Counter extends Component {
  render() {
    const { value, changeValue } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={() => changeValue()}>-</button>
          <button className="button is-success is-small" onClick={() => changeValue()}>+</button>
        </div>
      </div>
    );
  }
}
  
 
export default Counter;