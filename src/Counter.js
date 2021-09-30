import React, { Component } from 'react';

// Counter Component
class Counter extends Component {

    

    render() {
      const { value,action } = this.props;
      return (
        <div className="counter">
          <b>{value}</b>
          <div className="counter-controls">
            <button className="button is-danger is-small">-</button>
            <button className="button is-success is-small">+</button>
          </div>
        </div>
      );
    }
  }
  
 
export default Counter;