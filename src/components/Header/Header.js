import React from 'react';
import Moment from 'moment';

import './header.scss';

export default function Header() {
  return (
    <header>
      <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
      <p>Last updated: {Moment().format('MMMM Do YYYY, h:00 a PT')}</p>
    </header>
  );
}
