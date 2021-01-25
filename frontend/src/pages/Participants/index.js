import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import { getSubscriptions } from '../../services/api';

function Participants() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Participants';
  const classes = styles();
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    getSubscriptions()
    .then(res => {
      setSubscription(res.results);
    })
  }, []);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">
          Participants
        </Typography><br /><br />
        <div className={classes.root}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Affiliation</TableCell>
                  <TableCell>Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscription.map((row) => (
                  <StyledTableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.institute}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </StyledTableRow >
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Container>
  );
}

export default Participants;
