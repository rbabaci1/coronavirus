import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'moment';
import './navBar.scss';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const link = (index) => {
    if (index === 0) return '/';
    if (index === 1) return '/countries';
    return '/useful-info';
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Stats By Country', 'UseFul Info'].map((text, index) => (
          <NavLink exact to={link(index)} className='link'>
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <EqualizerIcon />
                ) : (
                  <InfoIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div className='nav-burger'>
        <Button onClick={toggleDrawer('left', true)}>{<MenuIcon />}</Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </div>

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
          Last updated:{' '}
          <span>{Moment().format('MMMM Do YYYY, h:00 a PT')}</span>
        </p>

        <div id='copyright'>&copy;r.babaci 2020</div>
      </div>
    </>
  );
}
