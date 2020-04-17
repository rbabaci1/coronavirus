import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  const globalCases = useFetch('https://corona.lmao.ninja/v2/all');

  if (!globalCases.cases) return <h1 className='status'>Loading...</h1>;

  return (
    <div className='home'>
      <div className='view-countries'>
        <Link to='/countries'>view by country</Link>
      </div>

      <h1>Global Cases</h1>

      <div className='top'>
        <section>
          <h2>Coronavirus Cases:</h2>
          <span className='cases'>{globalCases.cases}</span>
        </section>

        <section>
          <h2>Deaths:</h2>
          <span className='deaths'>{globalCases.deaths}</span>
        </section>
      </div>

      <div className='bottom'>
        <section>
          <h2>Recovered:</h2>
          <span className='recovered'>{globalCases.recovered}</span>
        </section>

        <section>
          <h2>Active Cases:</h2>
          <span className='active-cases'>{globalCases.active}</span>
        </section>
      </div>
    </div>
  );
}
