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
      <section>
        <h2>Coronavirus Cases:</h2>
        <span className='cases'>{globalCases.cases}</span>
      </section>

      <section>
        <h2>Deaths:</h2>
        <span className='deaths'>{globalCases.deaths}</span>
      </section>

      <section>
        <h2>Recovered:</h2>
        <span className='recovered'>{globalCases.recovered}</span>
      </section>
    </div>
  );
}
