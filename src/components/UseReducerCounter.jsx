import React,{useReducer} from 'react';


const initialState = 0;
const reduser = (state,action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducerCounter = () => {
    const [count,action] = useReducer(reduser,initialState)
  return (
    <div>
      <h1>Count-{count}</h1>
      <button onClick={()=>action('increment')} >Incrementx</button>
      <button onClick={()=>action('decrement')}>Decrement</button>
      <button onClick={()=>action('decrement')}>Reset</button>
    </div>
  )
}

export default UseReducerCounter
