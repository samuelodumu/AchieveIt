// logic for fetching quotes from affirmations.dev
import React, { useState, useEffect } from 'react';
import '../App.css';

function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://cors-headers.herokapp.com/www.affirmations.dev/')
      .then((response) => response.json())
      .then((data) => setQuote(data.affirmation))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h2>Inspirational Quote</h2>
      <h3 className='bold'>{quote}</h3>
    </div>
  );
}

export default Quotes;
