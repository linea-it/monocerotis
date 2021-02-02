import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Main() {

  const classes = styles();

  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Home';

  return (
    <div>
      <Container>
        <Grid item xs={12}>
            <Typography variant="h3" align="center" color="primary" className={classes.title}>Online Workshop</Typography>
            <br />
            <Typography variant="h4" align="center" color="primary" className={classes.subtitle}>On the Future of Data Centers and eScience Institutes</Typography>
            <Typography variant="h4" align="center" color="primary" className={classes.subtitle}>Celebrating LIneA’s 10th Anniversary</Typography>
            <br />
            <Typography variant="h5" align="center" color="primary" className={classes.date}>April 13-15, 2021</Typography>
            <br />
            <br />
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} md={6} >
              <Typography variant="h5" align="center" color="primary" className={classes.blockTitle}>International Organizing Committee</Typography>
              <br />
              <br />
              <div>
                <Typography align="center" color="primary" className={classes.blockText}>Andreas Wicenec (University of Western Australia)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>Fabio Hernandez (IN2P3/CNRS)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>George Beckett (University of Edinburg)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>Mario Juric (DIRAC/University of Washington)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>William O’Mullane (LSST/Rubin Observatory)</Typography>
              </div>
              </Grid>
              <Grid item xs={12} md={6} >
              <Typography variant="h5" align="center" color="primary" className={classes.blockTitle}>Local Organizing Committee</Typography>
              <br />
              <br />
              <div>
                <Typography align="center" color="primary" className={classes.blockText}>Carlos Adean (LIneA)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>Mariana Fernandes (LIneA)</Typography>
                <Typography align="center" color="primary" className={classes.blockText}>Rodrigo Boufleur (LIneA)</Typography>
              </div>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
