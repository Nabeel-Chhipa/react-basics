import React from "react";
import "./mystyles.css";
import '../AppStyle.css';
import moduleStyle from '../AppStyle.module.css'

const Stylesheet = () => {
  const style = {
    fontSize: "50px",
    color: "#990",
    margin: 0
  };
  return (
    <>
      <p className="primary">Stylesheet</p>
      <h4 style={style}>Stylesheet</h4>

      <p className="error">Error</p>
      <p className={moduleStyle.success}>Success</p>

    </>
  );
};

export default Stylesheet;
