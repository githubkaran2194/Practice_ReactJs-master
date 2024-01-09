import React, { useContext } from "react";
import { BioData } from "./RoutingContext";

const CompA = () => {
  const { name, age, mob } = useContext(BioData);

  return (
    <div>
      <h2>CompA</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Mobile: {mob}</p>
    </div>
  );
};

export default CompA;
