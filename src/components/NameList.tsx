import React from 'react'

// const NameList = () => {
//     const names =  ['Bruce', 'Superman', "WonderWoman"];
    
//   return (
//     <div>
//      {names.map(name=><h1>{name}</h1>)}
//     </div>
//   )
// }

// export default NameList

const NameList = () => {
    const names =  ['Bruce', 'Superman', "WonderWoman"];
    let list = names.map(name=><h1>{name}</h1>)
  return (
    <div>
     {list}
    </div>
  )
}

export default NameList

