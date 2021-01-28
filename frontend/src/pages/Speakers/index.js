import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import speakers from "./speakers.json";

function Speakers() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Speakers';
  const classes = styles();

  // const [speakers, setSpeakers] = useState([]);

  // useEffect(() => {
  //   [0,1,2].forEach(row => {
  //     schedule.events[row].rows.forEach(speaker =>{
  //       if (speaker.time && speaker.speaker) {
  //         console.log(speaker);
  //         setSpeakers(prevState => [...prevState , speaker]);
  //       }
  //     })
  //   })
  // }, []);

  const StyledTableCell = withStyles(() => ({
    root: {
      fontSize: '1.2rem',
      padding: '10px 20px',
    },
  }))(TableCell);

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">
          Speakers
        </Typography><br /><br />
        <Grid item xs={11} md={10} className={classes.grid}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {speakers.map(speaker =>(
                  <TableRow key={speaker.id}>
                    <StyledTableCell className={classes.tableCell}>{speaker.speaker}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.tableCell}>{speaker.affiliation}</StyledTableCell>
                  </TableRow >
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Speakers;
