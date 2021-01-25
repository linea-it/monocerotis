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
          md={7}
          sm={10}
          className={classes.grid}
        >
          <Typography variant="h6" color="primary">Rationale:</Typography><br />
          <Typography variant="subtitle1" color="primary">
            This workshop will bring together representatives of some of the more important data centers, eScience institutes and IT companies to discuss current solutions and new technological trends as data volumes from modern experiments such as  LSST, Euclid and SKA continue to grow. The workshop will happen remotely April 13-15, 2021. Further information  will be available at the workshop website. Inquiries can be sent to workshop2021@linea.gov.br.
          </Typography><br /><br />
          <Typography variant="h6" color="primary">Venue:</Typography><br />
          <Typography variant="subtitle1" color="primary">
            The workshop will be entirely remote and there will be no registration fee. We ask those interested in participating to register here. The first 70 participants will receive a zoom link for the entry workshop. All others will receive a youtube link 24 hours before each day.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdditionalInformation;
