import React from 'react';
import {
  Grid, Container, Typography, Link,
} from '@material-ui/core';

import styles from './styles';

function RegistrationSuccess() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Registration Success';

  const classes = styles();

  return (
    <Container>
      <Grid
        item
        xs={12}
      >
          <div className={classes.verifyEmail}>
            <Typography variant="h1" color="success" className={classes.success}>Congratulations!</Typography>
            <Typography variant="h2" className={classes.success}>
              You are almost there. To complete your registration, please check your email.
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {' '}
              <Link color="inherit" className={classes.returnPage} href="/">Return to homepage</Link>
            </Typography>
          </div>
      </Grid>
    </Container>
  );
}

export default RegistrationSuccess;
