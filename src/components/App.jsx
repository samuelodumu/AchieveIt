import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRotateRight, faGear } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRotateRight, faGear);
import Quotes from './Quotes';
import Timer from './Timer';
import Settings from './Settings';
import '../App.css';

function App() {
  const [durations, setDurations] = useState({
    pomodoro: 1500, // 25 minutes
    shortBreak: 300, // 5 minutes
    longBreak: 900 // 15 minutes
  });

  const [showSettings, setShowSettings] = useState(false);

  const updateDurations = (newDurations) => {
    setDurations(newDurations);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <div className='app'>
        <header className='mb-4'>
          <h1 className='yeseva-one-bold display-3 mb-0 py-0'>AchieveIt</h1>
          <small className='yeseva-one-regular mt-0 py-0'>
            Master your time, Achieve it all.
          </small>
          <hr />
        </header>
        <main style={{ placeItems: 'center' }}>
          <Quotes />
          <div className='outer-div'>
            <Timer
              durations={durations}
              updateDurations={updateDurations}
              toggleSettings={toggleSettings}
            />
            {showSettings && (
              <Settings
                durations={durations}
                updateDurations={updateDurations}
                closeSettings={toggleSettings}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
