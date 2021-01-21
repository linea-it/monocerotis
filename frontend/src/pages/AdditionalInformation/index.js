import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function AdditionalInformation() {
  const classes = styles();
  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid
          item
          xs={12}
          className={classes.grid}
        >
          <Grid
            item
            md={7}
            sm={10}
            className={classes.grid}
          >
            <Typography variant="h6" color="primary">Rationale:</Typography><br />
            <Typography variant="h6" color="primary">Venue:</Typography><br />
            <Typography variant="subtitle1" color="primary">The workshop will be entirely remote and there will be no registration fee. We ask those interested in participating to register here. The first 70 participants will receive a zoom link for the entry workshop. All others will receive a youtube link 24 hours before each day.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdditionalInformation;
