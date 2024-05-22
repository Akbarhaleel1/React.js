import React, { useEffect } from 'react'

const useDocumetTitle = (count) => {
    useEffect(()=>{
        document.title = `Count is ${count}`
    },[count])
}

export default useDocumetTitle
