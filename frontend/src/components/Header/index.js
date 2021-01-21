import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './styles';

function Header() {

  const classes = styles();

  const menus = [
    {
      description: 'Home',
      href: '/',
      target: '_self',
    },
    {
      description: 'Registration',
      href: '/registration',
      target: '_self',
    },
    {
      description: 'Program',
      href: '/program',
      target: '_self',
    },
    {
      description: 'Additional Information',
      href: '/additional-information',
      target: '_self',
    },
  ];

  return (
    <>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img src={`${process.env.PUBLIC_URL}/img/logo-linea.png`} alt="LIneA" className={classes.logo} />
        <List className={classes.menuList}>
          {menus.map((menu, index) => (
            <ListItem key={index} className={classes.listItem}>
              <Link color="primary" to={menu.href} className={classes.menuLink}>
                {menu.description}
              </Link>
            </ListItem>
          ))}
        </List>
        <img src={`${process.env.PUBLIC_URL}/img/logo-inct.png`} alt="LIneA" className={classes.logo} />
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Header;
