import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    // <div>
    //   <UserContext.Consumer>
    //     {(user) => {
    //       return (
    //         <ChannelContext.Consumer>
    //           {(channel) => {
    //             return (
    //               <div>
    //                 User context value: {user} and his channel is{channel}
    //               </div>
    //             );
    //           }}
    //         </ChannelContext.Consumer>
    //       );
    //     }}
    //   </UserContext.Consumer>
    // </div>
   <div>
     <h1>{user} is the Owner of {channel}</h1>
   </div>
  );
};

export default ComponentC;
