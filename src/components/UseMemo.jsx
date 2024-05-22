import React,{useState,useMemo} from 'react'

const UseMemo = () => {
    const [CounterOne,setCounterOne] = useState(0);
    const [CounterTwo,setCounterTwo] = useState(0);

    const handleChangeOne = ()=>{
        setCounterOne(CounterOne+1)
    }
    const handleChangeTwo = ()=>{
        setCounterTwo(CounterTwo+1)
    }

    const isEven = useMemo(()=>{
        let i=0
        while(i<1000000000){
            i++;
        }
        return CounterOne%2===0
    },[CounterOne])

  
  return (
    <div>
        <h2>{CounterOne}</h2>
      <button onClick={handleChangeOne}>CounterOne</button>
      <span>{isEven?"Even":"Odd"}</span>
        <h2>{CounterTwo}</h2>
      <button onClick={handleChangeTwo}>CounterTwo</button>
    </div>
  )
}

export default UseMemo
