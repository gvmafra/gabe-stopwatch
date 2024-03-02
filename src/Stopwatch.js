import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleStopwatch = () => setIsRunning(!isRunning);
  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-slate-200 shadow-inner">
      <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-2xl">
        <div className="w-full">
          <h1 className="font-bold text-xl text-center">Issa Stopwatch!!</h1>
        </div>
        <div className="p-2 bg-white rounded-full w-full h-auto text-black">
          <p className="font-bold text-6xl text-center">
            {(time / 1000).toFixed(2)}
          </p>
        </div>
        <div className="flex w-full justify-around bg-slate-400 rounded-lg text-white font-light">
          <button 
            className="rounded-lg p-2 w-20 hover:bg-slate-500 hover:shadow-inner" 
            onClick={toggleStopwatch}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button 
            className="rounded-lg p-2 w-20 hover:bg-slate-500 hover:shadow-inner" 
            onClick={resetStopwatch}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
