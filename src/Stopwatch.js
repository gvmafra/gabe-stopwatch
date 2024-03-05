import { useState, useEffect, useCallback } from "react";

// This time I used a custom hook to manage the timer state and logic,
// to separate the logic from the component, and it's reusable.
// I'm also using useCallback in addition to useState and useEffect.

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime((t) => t + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleStopwatch = useCallback(
    () => setIsRunning((current) => !current),
    []
  );

  const resetStopwatch = useCallback(() => {
    setTime(0);
    setIsRunning(false);
  }, []);

  return { time, isRunning, toggleStopwatch, resetStopwatch };
};

const Stopwatch = () => {
  const { time, isRunning, toggleStopwatch, resetStopwatch } = useTimer();

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-slate-200 shadow-inner">
      <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-2xl">
        <h1 className="font-bold text-xl text-center">Issa Stopwatch!!</h1>

        <div className="p-2 bg-white rounded-full w-full h-auto text-black">
          <p className="font-bold text-6xl text-center">
            {(time / 1000).toFixed(2)}
          </p>
        </div>

        {/* I also switched to two buttons instead of three to dynamically change the start/stop button. That should enhance the ui. */}
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
