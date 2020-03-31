import React, { useState, useEffect } from 'react';

import './home.scss';

export default function Home() {
  const [globalCases, setGlobalCases] = useState({});

  useEffect(() => {
    fetch('https://corona.lmao.ninja/all')
      .then(response => response.json())
      .then(data => setGlobalCases(data))
      .catch(console.error);
  }, []);

  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  );
}
