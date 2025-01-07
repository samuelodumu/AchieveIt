import Timer from './Timer';
import Quotes from './Quotes';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRotateRight, faGear } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRotateRight, faGear);

function App() {
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
            <Timer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
