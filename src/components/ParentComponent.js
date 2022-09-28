import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const greetParent = (childParameter) => {
    alert(`Alert from Parent Component ${childParameter}`)
  };

  return <ChildComponent greetParent={greetParent} />;
};

export default ParentComponent;
