import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRotateRight, faGear } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRotateRight, faGear);
import Timer from './Timer';
import Quotes from './Quotes';
import '../App.css';

function App() {
  const [durations, setDurations] = useState({
    pomodoro: 1500, // 25 minutes
    shortBreak: 300, // 5 minutes
    longBreak: 900 // 15 minutes
  });

  const updateDurations = (timerType, newDurations) => {
    setDurations((prevDurations) => ({
      ...prevDurations,
      [timerType]: newDurations
    }));
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
        <main style={{ placeItems: 'center', maxWidth: '70vw' }}>
          <Quotes />
          <div className='outer-div'>
            <Timer
              durations={durations}
              updateDurations={updateDurations}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
