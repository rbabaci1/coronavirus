import React, { useState, useEffect } from 'react';

import './home.scss';

export default function Home() {
  const [globalCases, setGlobalCases] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://corona.lmao.ninja/all')
      .then(response => response.json())
      .then(data => {
        setGlobalCases(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='home'>
      <section>
        <h2>Coronavirus Cases:</h2>
        <span className='cases'>
          {isLoading ? 'Loading...' : globalCases.cases}
        </span>
      </section>

      <section>
        <h2>Deaths:</h2>
        <span className='deaths'>
          {isLoading ? 'Loading...' : globalCases.deaths}
        </span>
      </section>

      <section>
        <h2>Recovered:</h2>
        <span className='recovered'>
          {isLoading ? 'Loading...' : globalCases.recovered}
        </span>
      </section>
    </div>
  );
}
