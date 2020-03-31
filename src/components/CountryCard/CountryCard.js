import React from 'react';

import './countryCard.scss';

export default function CountryCard({ country, date }) {
  return (
    <div className='country'>
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
      <p>{date}</p>
    </div>
  );
}
