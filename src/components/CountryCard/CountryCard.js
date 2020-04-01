import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import './countryCard.scss';

export default function CountryCard({ country }) {
  const date = useFetch(
    `https://coronavirus-19-api.herokuapp.com/countries/${country.country}`
  );

  if (!date) {
    return <h1 style={{ textAlign: 'center', color: '#fff' }}>Loading...</h1>;
  }

  return (
    <div className='country-card'>
      <p id='cnt'>
        <span>{country.country}</span>
        <img src={country.countryInfo.flag} alt='country flag' />
      </p>

      <p>{country.cases}</p>
      <p className='new-cases'>+{country.todayCases}</p>
      <p className='recovered'>{country.recovered}</p>
      <p className='deaths'>{country.deaths}</p>
      <p>{country.critical}</p>
      <p className='new-deaths'>+{country.todayDeaths}</p>
      <p>{country.active}</p>
      <p>{country.casesPerOneMillion}</p>
      <p>{country.deathsPerOneMillion}</p>
      <p>{date.firstCase}</p>
    </div>
  );
}
