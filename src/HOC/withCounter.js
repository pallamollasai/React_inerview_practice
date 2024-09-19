import React, { useState } from "react";
export const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <>
        <WrappedComponent
          {...props}
          count={count}
          incrementCount={incrementCount}
        />
      </>
    );
  };
  return WithCounter;
};
