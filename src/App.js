import React from "react";
import Counter from "./Counter";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
         ],
      };
   }

   incrementCount = (id) => {
      this.setState((prev) => ({
         ...prev,
         data: prev.data.map((item) =>
            item.id === id ? { ...item, value: item.value + 1 } : item
         ),
      }));
   };

   decrementCount = (id) => {
      this.setState((prev) => ({
         ...prev,
         data: prev.data.map((item) =>
            item.id === id ? { ...item, value: item.value - 1 } : item
         ),
      }));
   };

   addCounter = () => {
      this.setState((prev) => ({
        ...prev,
         data: [...prev.data, {id: prev.data.length + 1, value: 0}],
        //  data: [...prev.data, {id: prev.data.length + 1, value: 0})]
      }));
   };

   render() {
      return (
         <div>
            {this.state.data.map((counter) => (
               <Counter
                  key={counter.id}
                  value={counter.value}
                  incrementCount={this.incrementCount}
                  decrementCount={this.decrementCount}
                  buttonId={counter.id}
               />
            ))}
            <button onClick={this.addCounter}>Add counter</button>
         </div>
      );
   }
}

export default App;
