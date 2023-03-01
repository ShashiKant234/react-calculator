import React from "react";
import "./Radio.css";

const Radio = () => {
  return (
    <>
      <div>
        <input type="radio" id="theme1" value="theme1" name="btn" checked />
        <label for="theme1">Theme 1</label>
      </div>

      <div>
        <input type="radio" id="theme2" value="theme2" name="btn" />
        <label for="theme2">Theme 2</label>
      </div>
    </>
  );
};

export default Radio;
