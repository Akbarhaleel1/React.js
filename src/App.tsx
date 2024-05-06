// import React, { useState } from 'react';
// import Count from './components/Count';
// import NameList from './components/NameList';
import UseEffect from './components/UseEffect';
// import UseState from './components/UseState';
// import UserGreeting from './components/UserGreeting';
// import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import Message from './components/Message';
// import ChildComponent from './components/childClass'; // Ensure the path matches your file structure
// import FunctionComponent from './components/Greet';
const App: React.FC = () => {
  // const [data, setData] = useState<string>('initial Data'); // Corrected typo and added type

  // const updateData = () => {
  //   setData("Updated data"); // Corrected typo
  // };

  return (
    <div>
      <UseEffect/>
      {/* <UseState/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* <ChildComponent data={data} />
      <FunctionComponent name="akbar" heroName="superMan"/>
      <p>this is a childredfdn props</p>
      <FunctionComponent name="ahamed" heroName="WonderWoman"/>
      <FunctionComponent name="easa" heroName='Batman'/> */}
      {/* <button onClick={updateData}>Update Data</button> */}
    </div>
  );
};

export default App;
