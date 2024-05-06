import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'A3 series'
      }
      this.change = this.change.bind(this)
    }

  change(argument:string){
    this.setState({
        name:"Thanku for subscribing my chanel "+"From "+argument
    })
  }
    
  render() {
    return (
      <div>
        <ChildComponent subscribe={this.change}/>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
export default ParentComponent