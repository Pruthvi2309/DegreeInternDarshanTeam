import React, { Component } from 'react'

export class Counter extends Component {

    constructor(pp) {
      super(pp)
      this.state = {
         count:0
      }
    }
    increment()
    {
        this.setState({
            count:this.state.count+1
        }),
        () => {
            console.log('Callback value', this.state.count)
        }
    }

    decrement()
    {
        this.setState({
            count:this.state.count-2
        }),
        () => {
            console.log('Callback value', this.state.count);
        }
    }
  render() {
    return (constructor(props) {
        super(props)
      
        this.setState = {
           first
        }
      }
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={ () => this.increment()}>Increment</button>

        <button onClick={ () => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter