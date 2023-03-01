import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <form>
      <input type="text" value={props.expression} className="screen" />
    </form>
  );
};

export default Input;

// value={answer}
