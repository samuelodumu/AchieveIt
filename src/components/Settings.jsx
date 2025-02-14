import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Settings({
  durations,
  updateDurations,
  closeSettings,
  isShadowEnabled,
  toggleShadow,
  isAutoStartBreak,
  toggleAutoStartBreak,
  isAutoStartPomo,
  toggleAutoStartPomo,
  isDarkMode,
  toggleDarkMode
}) {
  const [newDurations, setNewDurations] = useState({
    pomodoro: durations.pomodoro / 60,
    shortBreak: durations.shortBreak / 60,
    longBreak: durations.longBreak / 60
  });

  const [shadowEnabled, setShadowEnabled] = useState(isShadowEnabled);
  const [autoStartBreak, setAutoStartBreak] = useState(isAutoStartBreak);
  const [autoStartPomo, setAutoStartPomo] = useState(isAutoStartPomo);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    setShadowEnabled(isShadowEnabled);
    setAutoStartBreak(isAutoStartBreak);
    setAutoStartPomo(isAutoStartPomo);
    setDarkMode(isDarkMode);
  }, [isShadowEnabled, isAutoStartBreak, isAutoStartPomo, isDarkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDurations({
      ...newDurations,
      [name]: parseInt(value, 10)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDurations({
      pomodoro: newDurations.pomodoro * 60,
      shortBreak: newDurations.shortBreak * 60,
      longBreak: newDurations.longBreak * 60
    });
    toggleShadow(shadowEnabled);
    toggleAutoStartBreak(autoStartBreak);
    toggleAutoStartPomo(autoStartPomo);
    toggleDarkMode(darkMode);
    closeSettings();
  };

  const handleShadowChange = (e) => {
    setShadowEnabled(e.target.checked);
  };

  const handleAutoStartBreakChange = (e) => {
    setAutoStartBreak(e.target.checked);
  };

  const handleAutoStartPomoChange = (e) => {
    setAutoStartPomo(e.target.checked);
  };

  const handleDarkModeChange = (e) => {
    setDarkMode(e.target.checked);
  };

  const handleCancel = () => {
    // Reset the state to initial values
    setNewDurations({
      pomodoro: durations.pomodoro / 60,
      shortBreak: durations.shortBreak / 60,
      longBreak: durations.longBreak / 60
    });
    setShadowEnabled(isShadowEnabled);
    setAutoStartBreak(isAutoStartBreak);
    setAutoStartPomo(isAutoStartPomo);
    setDarkMode(isDarkMode);
    closeSettings();
  };

  return (
    <div className='settings-overlay'>
      <div className='settings-box'>
        <h2 className='mt-0'>Settings</h2>
        <div className='form-check form-switch d-flex justify-content-between py-2'>
          <label className='form-check-label'>Dark mode</label>
          <input
            className='form-check-input bigger'
            type='checkbox'
            role='switch'
            checked={darkMode}
            onChange={handleDarkModeChange}
          />
        </div>
        <div className='form-check form-switch d-flex justify-content-between py-2'>
          <label className='form-check-label'>Timer shadow</label>
          <input
            className='form-check-input bigger'
            type='checkbox'
            role='switch'
            checked={shadowEnabled}
            onChange={handleShadowChange}
          />
        </div>
        <div className='form-check form-switch d-flex justify-content-between py-2'>
          <label className='form-check-label'>Auto start breaks</label>
          <input
            className='form-check-input bigger'
            type='checkbox'
            role='switch'
            checked={autoStartBreak}
            onChange={handleAutoStartBreakChange}
          />
        </div>
        <div className='form-check form-switch d-flex justify-content-between py-2'>
          <label className='form-check-label'>Auto start Pomodoros</label>
          <input
            className='form-check-input bigger'
            type='checkbox'
            role='switch'
            checked={autoStartPomo}
            onChange={handleAutoStartPomoChange}
          />
        </div>
        <div className='d-flex py-2 justify-content-center'>
          <hr style={{ borderTop: '2px solid #145da0', width: '20%' }} />
        </div>
        <p className='h6'>Set custom timer durations</p>
        <form onSubmit={handleSubmit}>
          <div className='timers d-flex'>
            <div className='form-group col-md-3'>
              <label className='form-label'>
                Pomo<span className='secondary'>doro</span>:
              </label>
              <input
                type='number'
                name='pomodoro'
                value={newDurations.pomodoro}
                className='form-control'
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className='form-group col-md-3'>
              <label className='form-label'>
                Short <span className='secondary'>break</span>:
              </label>
              <input
                type='number'
                name='shortBreak'
                value={newDurations.shortBreak}
                className='form-control'
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className='form-group col-md-3'>
              <label className='form-label'>
                Long <span className='secondary'>break</span>:
              </label>
              <input
                type='number'
                name='longBreak'
                value={newDurations.longBreak}
                className='form-control'
                onChange={handleChange}
                min={1}
              />
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-lg button mt-3'>
            Save
          </button>
          <button
            type='button'
            className='btn btn-lg button mt-3'
            onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

Settings.propTypes = {
  durations: PropTypes.object.isRequired,
  updateDurations: PropTypes.func.isRequired,
  closeSettings: PropTypes.func.isRequired,
  isShadowEnabled: PropTypes.bool.isRequired,
  toggleShadow: PropTypes.func.isRequired,
  isAutoStartBreak: PropTypes.bool.isRequired,
  toggleAutoStartBreak: PropTypes.func.isRequired,
  isAutoStartPomo: PropTypes.bool.isRequired,
  toggleAutoStartPomo: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Settings;
