import React from 'react';
import { NavLink } from 'react-router-dom';

import './navBar.scss';

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul>
        <NavLink exact to='/'>
          <li>Home</li>
        </NavLink>

        <NavLink to='/countries'>
          <li>Countries</li>
        </NavLink>

        <NavLink to='/info'>
          <li>Useful Info</li>
        </NavLink>
      </ul>
    </div>
  );
}
