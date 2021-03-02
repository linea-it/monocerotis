import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import Plot from 'react-plotly.js';
import { getSubscriptions } from '../../services/api';
import styles from './styles';

function Plots() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Plots';
  const classes = styles();
  const [participants, setParticipants] = useState({ labels: [], values: [] });

  const groupByKey = (arr, key) => {
    let result = [];
    result = arr.reduce((r, a) => {
      const row = r;
      row[a[key]] = row[a[key]] || [];
      row[a[key]].push(a);
      return row;
    }, Object.create(null));
    return result;
  };

  useEffect(() => {
    getSubscriptions().then((res) => {
      const results = groupByKey(res.results, 'country');

      const labels = Object.keys(results);
      const values = labels.map((label) => results[label].length);

      setParticipants({ labels, values });
    });
  }, []);

  return (
    <Container>
      <Grid item xs={12} className={classes.grid}>
        <Grid item xs={11} md={7} className={classes.grid}>
          <Plot
            data={[
              {
                values: participants.values,
                labels: participants.labels,
                type: 'pie',
                textposition: 'inside',
                hoverinfo: 'label+value+percent',
                hole: 0.2,
              },
            ]}
            layout={{
              // title: 'Participants By Country',
              margin: {
                t: 25,
                l: 25,
                r: 25,
                b: 0,
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Plots;
