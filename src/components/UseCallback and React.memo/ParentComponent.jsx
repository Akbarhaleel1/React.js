import React, { useCallback, useState } from 'react';
import DecrementButton from './DecrementButtonComponent';
import IncrementButton from './IncrementButtonComponent'

const ParentComponent = () => {
    const [count,setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount((prevCount)=>prevCount+1)
    }, [])
    const decrement = useCallback(()=>{
        setCount((prevCount)=>prevCount-2)
    }, [])
  return (
    <div>
      <h1>Count-{count}</h1>
      <IncrementButton onIncrement={increment}/>
      <DecrementButton onDecrement={decrement}/>
    </div>
  )
}

export default ParentComponent
