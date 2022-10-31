import { useState, useEffect } from 'react';

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (props.finished) {
      setFinishedTime(time);
      // console.log(time);
      // console.log(finishedTime);
    } else if (props.running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props, time]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;

export let finishedTime;
const setFinishedTime = (time) => {
  finishedTime = time;
  console.log(finishedTime);
};
