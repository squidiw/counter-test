import React from "react";

class Counter extends React.Component {
   handleIncrement = () => {
      this.props.incrementCount(this.props.buttonId);
   };
   handleDecrement = () => {
      this.props.decrementCount(this.props.buttonId);
   };

   render() {
      const { value } = this.props;

      return (
         <div className="counter">
            <b>{value}</b>
            <div className="counter-controls">
               <button
                  className="button is-danger is-small"
                  onClick={this.handleDecrement}>
                  -
               </button>
               <button
                  className="button is-success is-small"
                  onClick={this.handleIncrement}>
                  +
               </button>
            </div>
         </div>
      );
   }
}
export default Counter;
