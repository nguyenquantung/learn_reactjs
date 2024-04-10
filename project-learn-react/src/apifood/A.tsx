import React from "react";

const A = ({ title, image, calories }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{calories}</h2>
      <img src={image} />
    </div>
  );
};
export default A;
