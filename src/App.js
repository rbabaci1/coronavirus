import React from 'react';
import { Route } from 'react-router-dom';
import { Button } from '@material-ui/core';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
