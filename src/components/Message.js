import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Visitor");

  const changeMssage = () => {
    setMessage("Subscribe");
  };

  return (
    <div>
      <h1>Welcome {message}</h1>
      <button onClick={changeMssage}>Subscribe</button>
    </div>
  );
};

export default Message;
