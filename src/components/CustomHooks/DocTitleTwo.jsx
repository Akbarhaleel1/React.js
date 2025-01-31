import React, { useState } from 'react'
import useDocumetTitle from '../hooks/useDocumetTitle'

const DocTitleTwo = () => {
    const [count,setCount] = useState(0)

    useDocumetTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count -{count}</button>
    </div>
  )
}

export default DocTitleTwo
