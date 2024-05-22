import React from 'react'

const IncrementButtonComponent = ({onIncrement}) => {
    console.log('IncrementButton rendered');
  return (
    <div>
      <button onClick={onIncrement}>decrement</button>
    </div>
  )
}

export default React.memo(IncrementButtonComponent)
