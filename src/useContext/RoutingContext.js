import React from "react";
import CompA from "./CompA";
import { createContext } from "react";

const BioData = createContext();
const data = {
  name: "karan",
  age: 20,
  mob: 9850502194,
};  

const RoutingContext = () => {
  return (
    <BioData.Provider value={data}>
      <h1>RoutingContext</h1>
      <CompA />
    </BioData.Provider>
  );
};

export default RoutingContext;
export { BioData };
