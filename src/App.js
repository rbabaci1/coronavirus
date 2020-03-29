import React from 'react';
import { Route } from 'react-router-dom';
import { Button } from '@material-ui/core';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
