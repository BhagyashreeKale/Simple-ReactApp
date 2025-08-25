//1st React Component
import React from 'react';

type HelloProps = {
  name: string;
};
//Sending Props
const Hello: React.FC<HelloProps> = ({ name }) => {
  return <h2>👋 Hello, {name}!</h2>;
};

export default Hello;
