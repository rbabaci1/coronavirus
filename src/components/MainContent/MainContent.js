import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import './mainContent.scss';

export default function MainContent() {
  const [countries, error] = useFetch('https://corona.lmao.ninja/countries');

  return <div className='countries'></div>;
}
