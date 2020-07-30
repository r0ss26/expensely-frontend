import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((res) => setQuotes(res.data));
  }, []);

  return (
    <div className="card-panel teal">
      <span className="white-text">
        {quotes && quotes[Math.floor(Math.random() * quotes.length)].text}
      </span>
      <div className="black-text">
        {' '}
        {quotes && quotes[Math.floor(Math.random() * quotes.length)].author}
      </div>
    </div>
  );
};

export default Quotes;
