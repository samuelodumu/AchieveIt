import { useState } from 'react';
import './App.css';
import achievit_logo from './assets/achieveit_logo_black.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img
          src={achievit_logo}
          className='logo'
          alt='AchieveIt logo'
        />
      </div>
      <h1>AchieveIt</h1>
      <p>Master your time, achieve it all</p>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
