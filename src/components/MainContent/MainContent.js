import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import CountryCard from '../CountryCard/CountryCard';
import './mainContent.scss';

export default function MainContent() {
  //   const [countries, error] = useFetch('https://corona.lmao.ninja/countries');
  const countries = [
    {
      country: 'USA',
      countryInfo: {
        _id: 840,
        country: 'USA',
        iso2: 'US',
        iso3: 'USA',
        lat: 38,
        long: -97,
        flag:
          'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png'
      },
      cases: 123428,
      todayCases: 19302,
      deaths: 2211,
      todayDeaths: 515,
      recovered: 3231,
      active: 117986,
      critical: 2666,
      casesPerOneMillion: 373,
      deathsPerOneMillion: 7
    }
  ];

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
          <CountryCard country={country} date='Jan 20' />
        ))}
      </div>
    </div>
  );
}
