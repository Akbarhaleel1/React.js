import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Hellow"
      }
    //   this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(){
    //     this.setState({
    //         name:"Hello Akbar"
    //     })
    // }
    handleClick = ()=>{
        this.setState({
            name:"Hello Akbar"
        })
    }
  render() {
    return (
      <div>
         <h1>{this.state.name}</h1>
         <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default EventBind;