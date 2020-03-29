import React from 'react';
import { NavLink } from 'react-router-dom';

import './navBar.scss';

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul>
        <li>Home</li>
        <li>Countries</li>
        <li>Graphs</li>
      </ul>
    </div>
  );
}
