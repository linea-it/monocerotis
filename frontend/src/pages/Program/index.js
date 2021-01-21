import React from 'react';
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
import Schedule from "./Schedule";

function Program() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Program';

  const classes = styles();
  const program = Schedule();

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="primary">Program</Typography>

          {program.scheules.map((schedule) => (
            <>
              <br /><br />
              <Typography variant="h5" align="center" color="primary">Day {schedule.day} - {schedule.date}</Typography> 

              <TableContainer component={Paper} key={schedule.id}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Time</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Speaker</TableCell>
                      <TableCell>Affiliation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.rows.map((row) => {
                      return row.speaker === 'break' ? 
                      <StyledTableRow  key={row.speaker}>
                        <TableCell align="center" colspan="4">Break</TableCell>
                      </StyledTableRow > : 
                      <StyledTableRow  bac="#00b9f2" key={row.speaker}>
                        <TableCell component="th" scope="row">
                          {row.time}
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.speaker}</TableCell>
                        <TableCell>{row.affiliation}</TableCell>
                      </StyledTableRow >
                    } )}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Program;
