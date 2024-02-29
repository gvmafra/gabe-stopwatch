import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4 bg-slate-200 p-4 rounded-2xl">
        <div className="w-full">
          <h1 className="font-bold text-xl text-center">Issa Stopwatch!!</h1>
        </div>
        <div className="p-2 bg-white rounded-full w-full h-auto text-black">
          <p className="font-bold text-6xl text-center">
            {(time / 1000).toFixed(2)}
          </p>
        </div>
        <div className="flex w-full justify-around bg-slate-400 rounded-lg text-white">
          <button className="rounded-lg p-2 w-14" onClick={startStopwatch}>
            Start
          </button>
          <button className="rounded-lg p-2 w-14" onClick={stopStopwatch}>
            Stop
          </button>
          <button className="rounded-lg p-2 w-14" onClick={resetStopwatch}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
