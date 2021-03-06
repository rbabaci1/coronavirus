import React from 'react';
import './countryCard.scss';

export default function CountryCard({ country }) {
  return (
    <div className='country-card'>
      <p id='cnt'>
        <span>{country.country}</span>
        <img src={country.countryInfo.flag} alt='country flag' />
      </p>

      <p className='cases'>{country.cases}</p>
      <p className='new-cases'>+{country.todayCases}</p>
      <p className='recovered'>{country.recovered}</p>
      <p className='critical'>{country.critical}</p>
      <p className='new-deaths'>+{country.todayDeaths}</p>
      <p className='deaths'>{country.deaths}</p>
      <p className='active-cases'>{country.active}</p>
      <p>{country.casesPerOneMillion}</p>
      <p>{country.deathsPerOneMillion}</p>
    </div>
  );
}
