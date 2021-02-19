import React, { useState } from 'react';
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
  const [open, setOpen] = useState(1000);
  const [openWrapUp, setOpenWrapUp] = useState(1000);

  const handleTooltipClose = () => {
    setOpen(1000);
    setOpenWrapUp(1000);
  };

  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Speakers';
  const classes = styles();

  const StyledTableCell = withStyles(() => ({
    root: {
      fontSize: '1.2rem',
      padding: '10px 20px',
    },
  }))(TableCell);

  const TooltipInfo = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.main,
      // color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: 0,
      fontSize: 14,
    },
  }))(Tooltip);

  const TooltipWrapUp = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.error.main,
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
                    <StyledTableCell
                    className={classes.tableCell}>
                      { speaker.title ?
                      <>
                        <span>
                          {speaker.speaker}
                        </span>
                        <TooltipInfo
                        classes={{ tooltip: classes.customWidth }}
                        title={<>
                          <Typography gutterBottom color="inherit">Title:</Typography>
                          <Typography gutterBottom color="inherit" variant="body2" >{speaker.title}</Typography>
                          {speaker.abstract ?
                          <>
                            <Typography gutterBottom color="inherit">Abstract:</Typography>
                            <Typography gutterBottom color="inherit" variant="body2" >{speaker.abstract}</Typography>
                          </> :
                          <></>}
                        </>}
                        placement="right"
                        onClose={handleTooltipClose}
                        open={speaker.id === open}>
                          <span>
                            <InfoIcon onClick={() => {setOpen(speaker.id);}} onMouseOver={() => {setOpen(speaker.id);}} fontSize="small" className={classes.infoIcon} color="primary" />
                          </span>
                        </TooltipInfo>

                        {speaker.isOrganizer ?
                          <>
                          <TooltipWrapUp
                          classes={{ tooltip: classes.customWidth }}
                          title={<Typography gutterBottom color="inherit" variant="body2" >Wrap-up session</Typography>}
                          placement="right"
                          onClose={handleTooltipClose}
                          open={speaker.id === openWrapUp}>
                            <InfoIcon onClick={() => {setOpenWrapUp(speaker.id);}} onMouseOver={() => {setOpenWrapUp(speaker.id);}} fontSize="small" className={classes.infoIcon} color="error" />
                        </TooltipWrapUp>
                          </> :
                        <></>}



                      </> :
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
