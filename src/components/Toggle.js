import React, { useState } from "react";

function Toggle() {
  const [ isOn, setIsOn ] = useState(true);
const color = isOn ? 'red' : "white"
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
