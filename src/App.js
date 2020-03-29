import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import { Button } from '@material-ui/core';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;
