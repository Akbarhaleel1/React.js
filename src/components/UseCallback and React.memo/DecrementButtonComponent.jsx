import React from 'react'

const DecrementButtonComponent = ({onDecrement}) => {
    console.log('DecrementButton rendered');
  return (
    <div>
      <button onClick={onDecrement}>Increment</button>
    </div>
  )
}

export default React.memo(DecrementButtonComponent)
