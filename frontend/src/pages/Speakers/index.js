import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';
import styles from './styles';
import speakers from "./speakers.json";

function Speakers() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Speakers';
  const classes = styles();

  const StyledTableCell = withStyles(() => ({
    root: {
      fontSize: '1.2rem',
      padding: '10px 20px',
    },
  }))(TableCell);

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.main,
      // color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 0,
      fontSize: 14,
    },
  }))(Tooltip);

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">
          Speakers
        </Typography><br /><br />
        <Grid item xs={11} md={11} className={classes.grid}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableBody>
                {speakers.map(speaker =>(
                  <TableRow key={speaker.id}>
                    <StyledTableCell className={classes.tableCell}>
                      { speaker.title ?
                      <LightTooltip title={<><Typography color="inherit">Title:</Typography>{speaker.title}</>} placement="right">
                          <span>
                            {speaker.speaker}
                            <InfoIcon fontSize="small" className={classes.infoIcon} color="primary" />
                          </span>
                      </LightTooltip> :
                      <span className={classes.spanSpeaker}>{speaker.speaker}</span>
                      }
                    </StyledTableCell>
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
