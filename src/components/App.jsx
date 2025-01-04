import Timer from './Timer';
import Quotes from './Quotes';
import '../App.css';

function App() {
  return (
    <>
      <div className='app'>
        <header>
          <h1
            className='yeseva-one-bold'
            style={{ marginBottom: '0' }}>
            AchieveIt
          </h1>
          <small className='yeseva-one-regular'>
            Master your time, Achieve it all.
          </small>
          <hr />
        </header>
        <main style={{ placeItems: 'center', maxWidth: '70vw' }}>
          <Quotes />
          <Timer />
        </main>
      </div>
    </>
  );
}

export default App;
