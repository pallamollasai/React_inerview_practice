import React from "react";
import { withCounter } from "./withCounter";
function Counter(props) {
  return (
    <>
      <span>test is {props.test}</span>
      <span>count is {props.count}</span>
      <button onClick={() => props.incrementCount()}>Increment</button>
    </>
  );
}
export default withCounter(Counter);
