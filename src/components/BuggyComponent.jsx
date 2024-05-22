import React from 'react'

const BuggyComponent = () => {
    // Simulate a JS error
    throw new Error('I crashed!');
    return <div>This will never be displayed.</div>;
  };
  
export default BuggyComponent
