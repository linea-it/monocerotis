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
      }
    },
  }))(TableRow);

  const StyledTableCell = withStyles(() => ({
    root: {
      fontSize: '1rem',
      padding: '8px 15px',
    },
  }))(TableCell);

  const StyledTableCellTitle = withStyles(() => ({
    root: {
      fontSize: '1.2rem',
      padding: '8px 15px',
    },
  }))(TableCell);

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">
          Participants
        </Typography><br /><br />
        <Grid item xs={11} md={11} className={classes.grid}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCellTitle>Name</StyledTableCellTitle>
                  <StyledTableCellTitle>Affiliation</StyledTableCellTitle>
                  <StyledTableCellTitle>Country</StyledTableCellTitle>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscription.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row" className={classes.tableCell}>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell className={classes.tableCell}>{row.institute}</StyledTableCell>
                    <StyledTableCell className={classes.tableCell}>{row.country}</StyledTableCell>
                  </StyledTableRow >
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Participants;
