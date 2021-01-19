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
          {/* <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">About</Typography>
          </Breadcrumbs> */}
          <Typography
            gutterBottom
            className={classes.textFormat}
            variant="overline"
            component="h2"
          >
          <Grid
            item
            md={7}
            sm={10}
            className={classes.grid}
          >
            <div>
              <p><strong><em>Rationale:</em></strong></p> <br />
              <p><strong><em>Venue:</em></strong></p>
              <p>
                <span>The workshop will be entirely remote and there will be no registration fee. We ask those interested in participating to register here. The first 70 participants will receive a zoom link for the entry workshop. All others will receive a youtube link 24 hours before each day.</span>
              </p>
            </div>
          </Grid>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default AdditionalInformation;
