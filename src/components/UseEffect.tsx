// import {useEffect, useState} from 'react'


// const UseEffect = () => {
//     const [count,SetCount]= useState(0);
//     useEffect(()=>{
//         document.title = `You clicked ${count} times`
//     })
//   return (
//     <button onClick={()=>SetCount(count+1)}>Click {count} times </button>
//   )
// }

// export default UseEffect

import { useEffect, useState } from "react";


function HookCounterOne(){
    const [count,SetCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log('useEffect - Updating');
        document.title = `You clicked ${count} times`
    },[])

    return(
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={()=>SetCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne