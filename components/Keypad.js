import React, { useState } from "react";
import "./Keypad.css";

const Keypad = (props) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    props.onAddingNumber(event.target.name);
  };

  const clear = () => {
    props.onDel();
  };

  const plusMinus = () => {
    if (answer.charAt(0) === "-") {
      setAnswer(answer.substring(1));
    } else {
      setAnswer("-" + answer);
    }
  };

  const calculation = (event) => {
    props.onOutput();
  };

  return (
    <div className="buttons">
      <button className="dark-grey" onClick={clear}>
        AC
      </button>
      <button className="dark-grey" onClick={plusMinus}>
        +/-
      </button>
      <button className="dark-grey" name="%" onClick={clickHandler}>
        %
      </button>
      <button className="orange" name="/" onClick={clickHandler}>
        &divide;
      </button>
      <button name="7" onClick={clickHandler}>
        7
      </button>
      <button name="8" onClick={clickHandler}>
        8
      </button>
      <button name="9" onClick={clickHandler}>
        9
      </button>
      <button className="orange" name="*" onClick={clickHandler}>
        &times;
      </button>
      <button name="4" onClick={clickHandler}>
        4
      </button>
      <button name="5" onClick={clickHandler}>
        5
      </button>
      <button name="6" onClick={clickHandler}>
        6
      </button>
      <button className="orange" name="-" onClick={clickHandler}>
        -
      </button>
      <button name="1" onClick={clickHandler}>
        1
      </button>
      <button name="2" onClick={clickHandler}>
        2
      </button>
      <button name="3" onClick={clickHandler}>
        3
      </button>
      <button className="orange" name="+" onClick={clickHandler}>
        +
      </button>
      <button className="zero" name="0" onClick={clickHandler}>
        0
      </button>
      <button name="." onClick={clickHandler}>
        .
      </button>
      <button className="orange" onClick={calculation}>
        =
      </button>
    </div>
  );
};

export default Keypad;
