import React, { Component } from 'react'


class Count extends Component {
    constructor(props:any) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    ChangeCount():any{
        this.setState({
            count: this.state.count+1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.ChangeCount()}}>Count</button>
      </div>
    )
  }
}


export default Count;
