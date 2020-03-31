import React from 'react';

import './countryCard.scss';
import { Container } from '@material-ui/core';

export default function CountryCard({ country }) {
  return (
    <div className='country'>
      <div className='info'>
        <p id='cnt'>
          {country.country}
          <img src={country.countryInfo.flag} alt='country flag' />
        </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <p className='hover-text'>More Info</p>
    </div>
  );
}
