import { useState } from 'react';
import PropTypes from 'prop-types';

function Settings({ durations, updateDurations, closeSettings }) {
  const [newDurations, setNewDurations] = useState({
    pomodoro: durations.pomodoro / 60,
    shortBreak: durations.shortBreak / 60,
    longBreak: durations.longBreak / 60
  });

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
    closeSettings();
  };

  return (
    <div className='settings-overlay'>
      <div className='settings-box'>
        <h2>Settings</h2>
        <p>Set custom timer durations in seconds</p>
        <form onSubmit={handleSubmit}>
          <div className='timers d-flex'>
            <div className='form-group col-md-3'>
              <label className='form-label'>Pomodoro:</label>
              <input
                type='number'
                name='pomodoro'
                value={newDurations.pomodoro}
                className='form-control'
                onChange={handleChange}
              />
            </div>
            <div className='form-group col-md-3'>
              <label className='form-label'>Short break:</label>
              <input
                type='number'
                name='shortBreak'
                value={newDurations.shortBreak}
                className='form-control'
                onChange={handleChange}
              />
            </div>
            <div className='form-group col-md-3'>
              <label className='form-label'>Long break:</label>
              <input
                type='number'
                name='longBreak'
                value={newDurations.longBreak}
                className='form-control'
                onChange={handleChange}
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
            onClick={closeSettings}>
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
  closeSettings: PropTypes.func.isRequired
};

export default Settings;
