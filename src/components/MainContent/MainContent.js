import React, { useState, useEffect } from 'react';

import './mainContent.scss';

export default function MainContent() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/countries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(console.error);
  }, []);

  return <div className='countries'></div>;
}
