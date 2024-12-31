import Timer from './Timer';
import Quotes from './Quotes';
import '../App.css';

function App() {
  return (
    <>
      <div className='app'>
        <header>
          <h1 style={{marginBottom: '0'}}>AchieveIt</h1>
          <small>Master your time, Achieve it all.</small>
          <hr/>
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
