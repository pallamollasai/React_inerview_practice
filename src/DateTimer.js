import React, { useEffect, useState, useRef } from "react";
export default function DateTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, [currentTime]);

  return (
    <>
      <p>
        time is {currentTime.getHours()} {currentTime.getMinutes()}{" "}
        {currentTime.getSeconds()}
      </p>
    </>
  );
}
