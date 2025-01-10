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
  const [isShadowEnabled, setIsShadowEnabled] = useState(true);
  const [isAutoStartEnabled, setIsAutoStartEnabled] = useState(true);

  const updateDurations = (newDurations) => {
    setDurations(newDurations);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleShadow = (isEnabled) => {
    setIsShadowEnabled(isEnabled);
  };

  const toggleAutoStart = (isEnabled) => {
    setIsAutoStartEnabled(isEnabled);
  };

  return (
    <>
      <div className='app'>
        <main>
          <header className='mb-5'>
            <h1 className='yeseva-one-bold display-3 mb-0'>AchieveIt</h1>
            <small className='yeseva-one-regular mt-0'>
              Master your time, Achieve it all.
            </small>
          </header>
          <Quotes />
          <hr />
          <div className='outer-div'>
            <Timer
              durations={durations}
              updateDurations={updateDurations}
              toggleSettings={toggleSettings}
              isShadowEnabled={isShadowEnabled}
              isAutoStartEnabled={isAutoStartEnabled}
            />
            {showSettings && (
              <Settings
                durations={durations}
                updateDurations={updateDurations}
                closeSettings={toggleSettings}
                isShadowEnabled={isShadowEnabled}
                toggleShadow={toggleShadow}
                isAutoStartEnabled={isAutoStartEnabled}
                toggleAutoStart={toggleAutoStart}
              />
            )}
          </div>
        </main>
        <section className='info-section container-fluid d-flex justify-content-center'>
          <div className='col-md-5 text-start fancy-headers'>
            <h2 className='pb-2'>About AchieveIt</h2>
            <p>
              AchieveIt is a productivity app designed to help you manage your
              time effectively. It uses the Pomodoro technique to break your
              work into intervals, typically 25 minutes in length, separated by
              short breaks. This method helps improve focus and productivity.
            </p>
            <p>
              Customize your timer durations, enable or disable text shadow, and
              choose whether to auto-start breaks all while drawing
              encouragement from the affirmative messages displayed above the
              timer. Achieve your goals with AchieveIt!
            </p>
            <h2 className='pb-2'>About the Pomodoro Technique</h2>
            <p>
              The Pomodoro Technique was created by Francesco Cirillo for a more
              productive way to work and study. The technique uses a timer to
              break down work into intervals, traditionally 25 minutes in
              length, separated by short breaks. Each interval is known as a
              pomodoro, from the Italian word for &apos;tomato&apos;, after the
              tomato-shaped kitchen timer that Cirillo used as a university
              student. -
              <a
                href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
                target='_blank'>
                Wikipedia
              </a>
            </p>
          </div>
        </section>
        <footer>
          <hr />
          <p>
            Made with &lt;3 by{' '}
            <a
              href='https://x.com/SamuelOdumu'
              target='_blank'>
              Samuel Odumu
            </a>
          </p>
          <small>&copy; AchieveIt 2025. All Rights Reserved.</small>
        </footer>
      </div>
    </>
  );
}

export default App;
