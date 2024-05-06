// import {useState} from "react"
// const UseState = () => {
//   const [count,SetCount] = useState(0)
//   return (
//     <div>
//       <button onClick={()=>SetCount(count + 1)}>Count {count}</button>
//     </div>
//   )
// }

// export default UseState


// // useState with previous state
// import {useState} from "react"
// const UseState = () => {
//   let initialCount = 0;
//   const [count,SetCount] = useState(initialCount);
//   const incremetFive = () =>{
//     for(let i=0;i<5;i++){
//       SetCount(prevCount=>prevCount+1)
//     }
//   }
//   return (
  
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>SetCount(initialCount)}>Reset</button>
//       <button onClick={()=>SetCount(prevCount=>prevCount+1)}>+</button>
//       <button onClick={()=>SetCount(prevCount=>prevCount-1)}>-</button>
//       <button onClick={incremetFive}>Increment By five</button>
//     </div>
//   )
// }

// export default UseState


// useState with object

import {useState} from 'react'

const UseState = () => {
  const [name,setName] = useState({firstName:"",lastName:""});
  return (
    <div>
      <input type="text" value={name.firstName} onChange={e=> setName({...name,firstName:e.target.value})} />
      <input type="text" value={name.lastName} onChange={e=> setName({...name,lastName:e.target.value})} />
      <h2>Your firstName is - {name.firstName}</h2>
      <h2>Your lastName is - {name.lastName}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default UseState
