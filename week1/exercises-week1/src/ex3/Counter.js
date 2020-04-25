import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  let feedback = "";
  count > 10
    ? (feedback = "It's greater than 10")
    : (feedback = "Keep tryin..");
  return (
    <div>
      <Button setCount={setCount} />
      <Count count={count} />
      <h3>{feedback}</h3>
    </div>
  );
}

export default Counter;
