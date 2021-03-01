import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import schedule from "./schedule.json";
import styles from './styles';

function TabPanel(props) {

  const [scheduleSelected, setScheduleSelected] = useState(schedule.events[0]);
  const { value, index } = props;
  const classes = styles();

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
        padding: '10px 20px',
        maxWidth: '620px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }
    },
  }))(TableCell);

  const TooltipInfo = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: 0,
      fontSize: 14,
    },
  }))(Tooltip);


  useEffect(() => {
    setScheduleSelected(schedule.events[value]);
  }, [value]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <TableContainer component={Paper} key={scheduleSelected.id}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" align="center" color="primary">{scheduleSelected.date}</Typography>
        </Toolbar>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Time BRT (UTC-3)</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Speaker</StyledTableCell>
                <StyledTableCell>Affiliation</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleSelected.rows.map((row) => {
                if (row.speaker.includes('Chair')) {
                  return (
                    <StyledTableRow  key={row.id}>
                      <StyledTableCell />
                      <StyledTableCell colSpan="3" >{row.speaker}</StyledTableCell>
                    </StyledTableRow >
                  )
                } if (row.speaker === 'break') {
                  return (
                    <StyledTableRow  key={row.id}>
                      <StyledTableCell align="center" colSpan="4" className={classes.tableCell}>Break</StyledTableCell>
                    </StyledTableRow >
                  )
                }
                  return (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.time}
                      </StyledTableCell>
                      <StyledTableCell>
                        <TooltipInfo
                          classes={{ tooltip: classes.customWidth }}
                          title={<>
                            <Typography gutterBottom color="inherit">Title:</Typography>
                            <Typography gutterBottom color="inherit" variant="body2" >{row.title}</Typography>
                            {row.abstract ?
                            <>
                              <Typography gutterBottom color="inherit">Abstract:</Typography>
                              <Typography gutterBottom color="inherit" variant="body2" >{row.abstract}</Typography>
                            </> :
                            <></>}
                          </>}>
                          <span>{row.title}</span>
                        </TooltipInfo>
                      </StyledTableCell>
                      <StyledTableCell>{row.speaker}</StyledTableCell>
                      <StyledTableCell width={500}>{row.affiliation}</StyledTableCell>
                    </StyledTableRow >
                  )
              } )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Program() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Program';
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="primary">Program</Typography><br /><br />
        {/* <Typography variant="body1" align="center" className={classes.tbd}>(To be defined)</Typography><br /> */}
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
              <Tab label="Day 1" className={classes.tab} {...a11yProps(0)} />
              <Tab label="Day 2" className={classes.tab} {...a11yProps(1)} />
              <Tab label="Day 3" className={classes.tab} {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} />
          <TabPanel value={value} index={1} />
          <TabPanel value={value} index={2} />
        </div>
      </Grid>
    </Container>
  );
}

export default Program;
