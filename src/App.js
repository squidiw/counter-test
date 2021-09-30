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

  onIncrement = () => {
      this.setState({
        data: this.state.data.map(val => val.value + 1)
      })
  }

  render() {
    return (
      <div>
        {this.state.data.map(counter => ( 
          <Counter 
            onClick={this.onIncrement}
            key={counter.id} 
            value={counter.value} 
            />
        ))}
      </div>
    );
  }
}

export default App