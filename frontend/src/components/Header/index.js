import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import styles from './styles';

function Header() {

  const classes = styles();

  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    {
      description: 'Home',
      href: '/',
    },
    {
      description: 'Registration',
      href: '/registration',
    },
    {
      description: 'Program',
      href: '/program',
    },
    {
      description: 'Participants',
      href: '/participants',
    },
    {
      description: 'Additional Information',
      href: '/additional-information',
    },
  ];

  const toggleMenuClick = () => {
    setMenuOpen(prevState => !prevState)
  }

  return (
    <>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/logo-linea.png`} alt="LIneA" className={classes.logo} />
          <img src={`${process.env.PUBLIC_URL}/img/logo-inct.png`} alt="LIneA" className={classes.logoInctMobile} />
        </div>
        <Button color="primary" className={classes.menuMobileButton} onClick={toggleMenuClick}>
          {menuOpen ? <CloseIcon fontSize="large" color="primary" /> : <MenuIcon fontSize="large" color="primary" />}
          Menu
        </Button>
        <List className={`${classes.menuList} ${menuOpen ? classes.menuMobileOpen : classes.menuMobileClosed}`}>
          {menus.map((menu, index) => (
            <ListItem key={index} className={classes.listItem}>
              <Link color="primary" to={menu.href} className={classes.menuLink}>
                {menu.description}
              </Link>
            </ListItem>
          ))}
        </List>
        <img src={`${process.env.PUBLIC_URL}/img/logo-inct.png`} alt="LIneA" className={classes.logoInctComputer} />
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Header;
