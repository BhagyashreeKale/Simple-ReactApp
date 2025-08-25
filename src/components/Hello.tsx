import React from "react";

type HelloProps = {
  name?: string; // made optional
  emoji?: string; // added new prop
};

const Hello: React.FC<HelloProps> = ({ name = "Guest", emoji = "👋" }) => {
  return (
    <h2 style={{ color: "purple", fontFamily: "Arial, sans-serif" }}>
      {emoji} Hello, {name}!
    </h2>
  );
};

export default Hello;
