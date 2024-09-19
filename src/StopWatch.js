import React, { useState, useRef, useEffect } from "react";
export default function StopWatch() {
  const [startTime, setStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 100);
    return () => {
      clearInterval(timerRef.current);
    };
  });
  const timeDiff = (currentTime - startTime) / 1000;

  return (
    <>
      <p>stopwatch: {timeDiff.toFixed(3)}</p>
    </>
  );
}
