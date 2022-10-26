import { useState, useEffect } from 'react';

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.running]);
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
