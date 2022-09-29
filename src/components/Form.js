import React, { useState } from "react";
import "../AppStyle.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome: ${userName} \nMessage: ${message}`);
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="formWrapper">
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br></br>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
