import React from 'react';
import NavBar from '../NavBar/NavBar';

import './home.scss';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <h1>Home here</h1>
    </div>
  );
}
