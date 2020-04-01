import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import CountryCard from '../CountryCard/CountryCard';
import './mainContent.scss';

export default function MainContent() {
  const countries = useFetch('https://corona.lmao.ninja/countries');

  if (!countries) {
    return <h1 style={{ textAlign: 'center', color: '#fff' }}>Loading...</h1>;
  }

  return (
    <div className='countries'>
      <div className='table'>
        <section className='first-row'>
          <p id='country'>Country</p>
          <p>Total Cases</p>
          <p>New Cases</p>
          <p>Total Recovered</p>
          <p>Total Deaths</p>
          <p>Critical</p>
          <p>New Deaths</p>
          <p>Active Cases</p>
          <p>
            Cases/
            <br />
            1M pop
          </p>
          <p>
            Deaths/
            <br />
            1M pop
          </p>
          <p>1st Case Reported</p>
        </section>

        {countries.map(country => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}
