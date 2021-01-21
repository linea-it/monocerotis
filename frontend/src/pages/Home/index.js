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
            <Typography variant="h3" align="center" color="primary">Workshop <spam className={classes.onlineText}>(online)</spam></Typography>
            <br />
            <Typography variant="h4" align="center" color="primary">On the Future of Data Centers and eScience Institutes</Typography>
            <Typography variant="h4" align="center" color="primary">Celebrating LIneA’s 10th Anniversary</Typography>
            <br />
            <Typography variant="h5" align="center" color="primary">April 13-15, 2021</Typography>
            <br />
            <br />
            <Grid container spacing={3} justify="center">
              <Grid item xs={6} >
              <Typography variant="h5" align="center" color="primary">International Organizing Committee</Typography>
              <br />
              <br />
              <div className={classes.organizing}>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Andreas Wicenec</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Fabio Hernandez</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>George Beckett</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Mario Yuric</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>William O’Mullane</Typography>
              </div>
              </Grid>
              <Grid item xs={6} >
              <Typography variant="h5" align="center" color="primary">Local Organizing Committee</Typography>
              <br />
              <br />
              <div className={classes.organizing}>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Carlos Adean</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Julia Gschwend</Typography>
                <Typography variant="h5" align="left" color="primary" className={classes.textOrganizingCommitte}>Mariana Fernandes</Typography>
              </div>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
