import Timer from './Timer';
import Quotes from './Quotes';
import '../App.css';

function App() {
  return (
    <>
      <div className='app'>
        <header>
          <h1>AchieveIt</h1>
          <p>Master your time, Achieve it all</p>
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
