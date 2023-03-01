import React, { useState } from "react";
import Keypad from "./components/Keypad.js";
import Input from "./components/Input.js";
import Radio from "./components/Radio.js";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const calculation = () => {
    setResult(eval(result).toString());
  };

  const saveNumber = (enteredExpression) => {
    setResult((prevExpression) => {
      return prevExpression.concat(enteredExpression);
    });
  };

  const allClear = () => {
    setResult("");
  };

  return (
    <>
      <Radio />
      <div className="container">
        <Input expression={result} output={result} />
        <Keypad
          onAddingNumber={saveNumber}
          onDel={allClear}
          onOutput={calculation}
        />
      </div>
    </>
  );
}

export default App;
