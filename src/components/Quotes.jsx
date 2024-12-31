// logic for fetching quotes from affirmations.dev
import React, { useState, useEffect } from 'react';
import '../App.css';

function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/www.affirmations.dev/')
      .then((response) => response.json())
      .then((data) => setQuote(data.affirmation))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <p className='bold'>Session quote: {quote}</p>
    </div>
  );
}

export default Quotes;
