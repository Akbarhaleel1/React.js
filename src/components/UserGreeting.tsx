import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoogedIn: true,
    };
  }

  render() {
   return this.state.isLoogedIn && <div>Welecom User</div>
  
    // return this.state.isLoogedIn ? (
    //   <div>Welcome user</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // let message;
    // if (this.state.isLoogedIn) {
    //   message =  <div>Welcome user</div>;
    // } else {
    //   message =  <div>Welcome guestd</div>;
    // }
    // return message;
  }
}

export default UserGreeting;
