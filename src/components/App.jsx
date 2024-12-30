import React from 'react';
import { react } from '@babel/types';
import Quotes from './Quotes';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <>
      <div className='app'>
        <header>
          <h1>AchieveIt</h1>
          <p>Master your time, achieve it all</p>
        </header>
        <main>
          <Quotes />
          <Timer />
        </main>
      </div>
    </>
  );
}

export default App;
