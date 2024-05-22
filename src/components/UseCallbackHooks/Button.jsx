import React from 'react';
import Count from './Count'
import Title from './ParentComponent'

const Button = ({handleClick,children}) => {
    console.log("render button -",children);
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default React.memo(Button)
