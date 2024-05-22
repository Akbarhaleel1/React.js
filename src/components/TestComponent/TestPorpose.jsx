import React, { useMemo, useState } from 'react';
import Componets from './Component'

export const userContext = React.createContext();
export const channelContext = React.createContext();

const TestPurpose = () => {
  const [counterOne,setCounterOne] = useState(0);

 const handleCounterOne =()=>{
    setCounterOne(counterOne+1)
  }

  return (
    <div>
      <userContext.Provider value={"Akbar haleel"}>
        <channelContext.Provider value={"A3 series"}>
          <Componets/>
        </channelContext.Provider>

      </userContext.Provider>

      <h1>CounterOne{counterOne}</h1>
      <button onClick={()=>handleCounterOne()}>counterOne</button>
  
    </div>
  );      
}

export default TestPurpose;
