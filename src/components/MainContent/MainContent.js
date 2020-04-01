import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

import CountryCard from '../CountryCard/CountryCard';
import './mainContent.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

export default function MainContent() {
  const countries = useFetch('https://corona.lmao.ninja/countries');
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const changeHandler = e => setSearchTerm(e.target.value);

  useEffect(() => {
    const result = countries.filter(country =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(result);
  }, [searchTerm, countries]);

  if (!countries) {
    return <h1 style={{ textAlign: 'center', color: '#fff' }}>Loading...</h1>;
  }

  return (
    <div className='countries'>
      <div className='search-bar'>
        <span role='img' aria-label='search icon'>
          🔍
        </span>
        <TextField
          id='standard-secondary'
          label='Search Country'
          color='secondary'
          onChange={changeHandler}
        />
      </div>

      <div className='table'>
        <section className='first-row'>
          <p id='country'>Country</p>
          <p>Total Cases</p>
          <p>New Cases</p>
          <p>Total Recovered</p>
          <p>Critical</p>
          <p>New Deaths</p>
          <p>Total Deaths</p>
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
        </section>

        {countries &&
          searchResult.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
      </div>
    </div>
  );
}
