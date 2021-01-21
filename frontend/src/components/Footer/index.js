import React from 'react';
import useStyles from './styles';
import footerBg from '../../assets/img/footer.png';

function Footer() {
  const classes = useStyles({ footerBg });

  return (
    <footer className={classes.root} />
  );
}
export default Footer;
