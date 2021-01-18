import React from 'react';
// import Interfaces from './partials/Interfaces';
// import Supporters from './partials/Supporters';
import styles from './styles';

function Main() {
  const classes = styles();

  return (
    <div>
      {/* <Stars />
      <Banner /> */}
      <div className={classes.root}>
        {/* <Interfaces /> */}
        {/* <Supporters /> */}
      </div>
    </div>
  );
}

export default Main;
