import React from "react";

const NameList = () => {
  const data = ["Nabeel", "Usama", "Saad"];
  return (
    <div>
      {data.map((items) => {
        return (
            <p key={items}>{items}</p>
        );
      })}
    </div>
  );
};

export default NameList;
