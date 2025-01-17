// logic for the pomodoro timer
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Timer({
  durations,
  toggleSettings,
  isShadowEnabled,
  isAutoStartBreak,
  isAutoStartPomo,
  isDarkMode
}) {
  const [activeTimer, setActiveTimer] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(durations['pomodoro']);
  const [isRunning, setIsRunning] = useState(false);
  const notificationSound = useRef(new Audio('/kitchen-alarm.mp3'));
  const clickSound = useRef(new Audio('/click.mp3'));

  useEffect(() => {
    // update timeLeft when the active timer or the duration of the active timer changes
    setTimeLeft(durations[activeTimer]);
  }, [durations, activeTimer]);

  useEffect(() => {
    let interval;
    const currentNotificationSound = notificationSound.current;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      currentNotificationSound.play();

      if (isAutoStartBreak) {
        setTimeout(() => {
          currentNotificationSound.pause();
          currentNotificationSound.currentTime = 0;
        }, 3000);
        setTimeout(() => {
          if (activeTimer === 'pomodoro') {
            setActiveTimer('shortBreak');
            setTimeLeft(durations['shortBreak']);
            setIsRunning(true);
          }
        }, 1000); // 1 second delay between pomodoro and short break
      }
      if (isAutoStartPomo) {
        setTimeout(() => {
          currentNotificationSound.pause();
          currentNotificationSound.currentTime = 0;
        }, 3000);
        setTimeout(() => {
          if (activeTimer === 'shortBreak' || activeTimer === 'longBreak') {
            setActiveTimer('pomodoro');
            setTimeLeft(durations['pomodoro']);
            setIsRunning(true);
          }
        }, 1000); // 1 second delay between short or long break and pomodoro
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isAutoStartBreak, isAutoStartPomo, activeTimer, durations]);

  useEffect(() => {
    const root = document.documentElement;
    if (activeTimer === 'pomodoro') {
      root.style.setProperty('--current-color', 'var(--pomodoro-color)');
      root.style.setProperty('--button-color', 'var(--pomodoro-color)');
    } else if (activeTimer === 'shortBreak') {
      root.style.setProperty('--current-color', 'var(--short-break-color)');
      root.style.setProperty('--button-color', 'var(--short-break-color)');
    } else if (activeTimer === 'longBreak') {
      root.style.setProperty('--current-color', 'var(--long-break-color)');
      root.style.setProperty('--button-color', 'var(--long-break-color)');
    }
  }, [activeTimer]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    clickSound.current.play();
  };
  const resetTimer = () => {
    setTimeLeft(durations[activeTimer]);
    setIsRunning(false);
    notificationSound.current.pause();
    notificationSound.current.currentTime = 0;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={`card py-3 px-5 mt-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div
        className={`d-flex justify-content-center p-3 ${
          isDarkMode ? 'hidden' : ''
        }`}>
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
            break
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
            break
          </span>
        </span>
      </div>
      {/* ======================== TIME ICON ====================== */}
      <h1
        className='fw-bold time'
        style={{
          textShadow:
            isShadowEnabled && !isDarkMode ? '10px 10px 2px #bcbcbc' : 'none'
        }}>
        {formatTime(timeLeft)}
      </h1>
      {/* ======================== TIME ICON ====================== */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 0'
        }}>
        <FontAwesomeIcon
          icon='fa-solid fa-arrow-rotate-right'
          size='2x'
          className={`icons ${isDarkMode ? 'dark-mode' : ''}`}
          onClick={resetTimer}
        />
        <button
          onClick={toggleTimer}
          className={`${isDarkMode ? 'dark-mode' : ''}`}
          style={{
            transform: isRunning ? 'translateY(3px)' : 'none',
            boxShadow: isRunning ? '0 4px #bcbcbc' : '0 8px #bcbcbc'
          }}>
          <span>{isRunning ? 'Pause' : 'Start'}</span>
        </button>
        <FontAwesomeIcon
          icon='fa-solid fa-gear'
          size='2x'
          className={`icons ${isDarkMode ? 'dark-mode' : ''}`}
          onClick={toggleSettings}
        />
      </div>
    </div>
  );
}
Timer.propTypes = {
  durations: PropTypes.object.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  isShadowEnabled: PropTypes.bool.isRequired,
  isAutoStartBreak: PropTypes.bool.isRequired,
  isAutoStartPomo: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default Timer;
