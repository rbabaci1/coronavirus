import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import UsefulInfo from './components/UsefulInfo/UsefulInfo';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(!open);

  return (
    <div className='App'>
      <div className='menu'>
        <MenuIcon onClick={showMenu} />
      </div>

      <Header />
      <NavBar open={open} />

      <Route exact path='/' component={Home} />
      <Route path='/countries' component={MainContent} />
      <Route path='/useful-info' component={UsefulInfo} />
    </div>
  );
}

export default App;
