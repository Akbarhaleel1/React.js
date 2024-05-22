import React, { useEffect, useState } from 'react'
import useDocumetTitle from '../hooks/useDocumetTitle'

const DocTitleOne = () => {
    const [count,setCount] = useState(0)

    useDocumetTitle(count)

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count -{count}</button>
    </div>
  )
}

export default DocTitleOne
