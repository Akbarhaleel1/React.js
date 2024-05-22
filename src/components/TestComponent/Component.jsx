import React, { useContext } from 'react';
import {userContext,channelContext} from './TestPorpose'


const Components = () => {
  const user = useContext(userContext);
  const channel = useContext(channelContext)

  return (
    <div>
      <h1>User Is {user},Channel Name </h1>
    </div>
  );
}

export default Components;
