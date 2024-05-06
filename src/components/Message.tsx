import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super();
        this.state = {
            name:"Welcome visitor"
        }
    }
    ButtonChange(){
        this.setStateb({
            name:"Thanku for your Subscription"
        })
    }
  render() {
    return (
    <div>
         <h1>
        {this.state.name}
     </h1>
     <button onClick={()=>this.ButtonChange()}>Subscribe</button>
    </div>
    )
  }
}

export default Message