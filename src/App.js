import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      data : [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }
      ]
    }
  }

  changeValue = () =>{
    console.log('clicked')
  }
  render() {
    return (
      <div>
        {this.state.data.map(counter => ( 
          <Counter 
            key={counter.id} 
            
            value={counter.value} 
            changeValue={this.changeValue}
            />
        ))}
      </div>
    );
  }
}

export default App