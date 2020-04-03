import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import UsefulInfo from './components/UsefulInfo/UsefulInfo';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />

      <Route exact path='/' component={Home} />
      <Route path='/countries' component={MainContent} />
      <Route path='/useful-info' component={UsefulInfo} />
    </div>
  );
}

export default App;
