// logic for the pomodoro timer
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Timer({ durations, updateDurations }) {
  const [activeTimer, setActiveTimer] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(durations['pomodoro']);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(durations[activeTimer]);
  }, [durations, activeTimer]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // notification sounds go here
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setTimeLeft(durations[activeTimer]);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='card py-5 px-5 mt-4'>
      <div className='d-flex justify-content-center p-3 '>
        <span
          className={`timer-option px-2 h6 ${
            activeTimer === 'pomodoro' ? 'active-timer' : ''
          }`}
          onClick={() => {
            setActiveTimer('pomodoro');
            setTimeLeft(durations['pomodoro']);
            setIsRunning(false);
          }}>
          Pomo
          <span
            className={`secondary h6 ${
              activeTimer === 'pomodoro' ? 'active-timer' : ''
            }`}>
            doro
          </span>
        </span>
        <span
          className={`timer-option px-2 h6 ${
            activeTimer === 'shortBreak' ? 'active-timer' : ''
          }`}
          onClick={() => {
            setActiveTimer('shortBreak');
            setTimeLeft(durations['shortBreak']);
            setIsRunning(false);
          }}>
          Short{' '}
          <span
            className={`secondary h6 ${
              activeTimer === 'shortBreak' ? 'active-timer' : ''
            }`}>
            Break
          </span>
        </span>
        <span
          className={`timer-option px-2 h6 ${
            activeTimer === 'longBreak' ? 'active-timer' : ''
          }`}
          onClick={() => {
            setActiveTimer('longBreak');
            setTimeLeft(durations['longBreak']);
            setIsRunning(false);
          }}>
          Long{' '}
          <span
            className={`secondary h6 ${
              activeTimer === 'longBreak' ? 'active-timer' : ''
            }`}>
            Break
          </span>
        </span>
      </div>
      {/* ======================== TIME ICON ====================== */}
      <h1 className='fw-bold time'>{formatTime(timeLeft)}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '20px 0'
        }}>
        <FontAwesomeIcon
          icon='fa-solid fa-arrow-rotate-right'
          size='2x'
          className='icons'
          onClick={resetTimer}
        />
        <button
          onClick={toggleTimer}
          style={{
            transform: isRunning ? 'translateY(3px)' : 'none',
            boxShadow: isRunning ? '0 4px #bcbcbc' : '0 8px #bcbcbc'
          }}>
          <span>{isRunning ? 'Pause' : 'Start'}</span>
        </button>
        <FontAwesomeIcon
          icon='fa-solid fa-gear'
          size='2x'
          className='icons'
        />
      </div>
    </div>
  );
}
Timer.propTypes = {
  durations: PropTypes.object.isRequired,
  updateDurations: PropTypes.func.isRequired
};

export default Timer;
