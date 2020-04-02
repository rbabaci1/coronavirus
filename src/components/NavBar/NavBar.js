import React from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'moment';

import './navBar.scss';

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul>
        <NavLink exact to='/'>
          <li>Home</li>
        </NavLink>

        <NavLink to='/countries'>
          <li>Stats By Country</li>
        </NavLink>

        <NavLink to='/useful-info'>
          <li>Useful Info</li>
        </NavLink>
      </ul>

      <p>
        Last updated: <span>{Moment().format('MMMM Do YYYY, h:00 a PT')}</span>
      </p>

      <div id='copyright'>&copy;r.babaci 2020</div>
    </div>
  );
}
