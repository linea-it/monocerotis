import React from 'react';
import useStyles from './styles';
import footerBg from '../../assets/img/footer.png';

function Footer() {
  const classes = useStyles({ footerBg });

  return (
    <footer className={classes.footer}>
      <img src={footerBg} className={classes.footerImg} alt="Footer" />
    </footer>
  );
}
export default Footer;
