// logic for fetching quotes from affirmations.dev
import { useState, useEffect } from 'react';
import '../App.css';

function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://cors-proxy-1je6.onrender.com/https://www.affirmations.dev/')
      .then((response) => response.json())
      .then((data) => setQuote(data.affirmation))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className='quote'>
      <p className='yeseva-one-regular'>Remember: {quote}</p>
    </div>
  );
}

export default Quotes;
