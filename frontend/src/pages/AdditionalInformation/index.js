import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function AdditionalInformation() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Additional Information';

  const classes = styles();
  return (
    <Container>
      <Grid
        item
        xs={12}
        className={classes.grid}
      >
        <Grid
          item
          xs={11}
          md={7}
          className={classes.grid}
        >
          <Typography variant="h5" color="primary" className={classes.title}>Rationale:</Typography><br />
          <Typography variant="subtitle1" color="primary" className={classes.description}>
          This workshop will bring together representatives of some of the more important data centers, eScience institutes and IT companies to discuss current solutions and new technological trends as data volumes from modern experiments such as LSST, Euclid and SKA continue to grow. The workshop will take place remotely April 13-15, 2021. Inquiries can be sent to  <a href={'mailto:workshop2021@linea.gov.br?subject="Workshop 2021"'}>workshop2021@linea.gov.br</a>.
          </Typography><br /><br />
          <Typography variant="h5" color="primary" className={classes.title}>Venue:</Typography><br />
          <Typography variant="subtitle1" color="primary" className={classes.description}>
          The workshop will be entirely remote and there will be no registration fee. We ask those interested in participating to register <a href="/registration">here</a>. Participants will receive connection information on April 12.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdditionalInformation;
