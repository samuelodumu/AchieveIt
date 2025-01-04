// logic for the pomodoro timer
import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setTime(25 * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='card py-5 px-5 mt-4' style={{ color: '#3c3c3e' }}>
      <h6 className='pb-2'>Pomodoro | Short Break | Long Break</h6>
      <h1 className='fw-bold time' style={{ fontSize: '120px'}}>{formatTime(time)}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
