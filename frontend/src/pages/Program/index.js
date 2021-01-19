import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Program() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Program';

  const classes = styles();

  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid item xs={12}>
          <Grid item xs={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="textPrimary">Program</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Program;
