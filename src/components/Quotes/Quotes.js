import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((res) => setQuotes(res.data));
  }, []);

  return (
    <div class="card-panel teal">
      <span class="white-text">
        {quotes && quotes[Math.floor(Math.random() * quotes.length)].text}
      </span>
      <div class="black-text">
        {' '}
        {quotes && quotes[Math.floor(Math.random() * quotes.length)].author}
      </div>
    </div>
  );
};

export default Quotes;
