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
      <div className='top'>
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
      </div>

      <div className='bottom'>
        <section>
          <h2>Recovered:</h2>
          <span className='recovered'>
            {isLoading ? 'Loading...' : globalCases.recovered}
          </span>
        </section>

        <section>
          <h2>Active Cases:</h2>
          <span className='active-cases'>
            {isLoading ? 'Loading...' : globalCases.active}
          </span>
        </section>
      </div>
    </div>
  );
}
