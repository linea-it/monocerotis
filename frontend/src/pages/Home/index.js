import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Main() {
  return (
    <div>
      <Container>
        <Grid item xs={12}>
            <Typography variant="h3" align="center" color="textSecondary">Remote Workshop</Typography>
            <br /><Typography variant="h4" align="center" color="textSecondary">On the Future of Data Centers and eScience Institutes Celebrating LIneA’s 10th Anniversary</Typography>
            <br /><Typography variant="h3" align="center" color="textSecondary">April 13-15, 2021</Typography>
            <br /><br />
            <Grid container xs={12}>
              <Grid item xs={6} >
              <Typography variant="h5" align="center" color="textSecondary">International Organizing Committee</Typography>
              <br /><br />
              <Typography variant="h5" align="center" color="textSecondary">Andreas Wicenec</Typography>
              <Typography variant="h5" align="center" color="textSecondary">Fabio Hernandez</Typography>
              <Typography variant="h5" align="center" color="textSecondary">George Beckett</Typography>
              <Typography variant="h5" align="center" color="textSecondary">Mario Yuric</Typography>
              <Typography variant="h5" align="center" color="textSecondary">William O’Mullane</Typography>
              </Grid>
              <Grid item xs={6} >
              <Typography variant="h5" align="center" color="textSecondary">Local Organizing Committee</Typography>
              <br /><br />
              <Typography variant="h5" align="center" color="textSecondary">Carlos Adean</Typography>
              <Typography variant="h5" align="center" color="textSecondary">Julia Gschwend</Typography>
              <Typography variant="h5" align="center" color="textSecondary">Mariana Fernandes</Typography>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
