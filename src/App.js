import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import { Button } from '@material-ui/core';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
