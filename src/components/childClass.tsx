import React from 'react';
interface ChildComponentProps {
  data: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ data }) => {
  return <p>{data}</p>;
};

export default ChildComponent;