/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
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
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Schedule from "./Schedule";
import styles from './styles';

function TabPanel(props) {
  const program = Schedule();
  const [scheduleSelected, setScheduleSelected] = React.useState(program.scheules[0]);
  const { value, index } = props;
  const classes = styles();

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  useEffect(() => {
    setScheduleSelected(program.scheules[value]);
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
                <TableCell>Time</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Speaker</TableCell>
                <TableCell>Affiliation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleSelected.rows.map((row) => {
                return row.speaker === 'break' ? 
                <StyledTableRow  key={row.id}>
                  <TableCell align="center" colSpan="4">Break</TableCell>
                </StyledTableRow > : 
                <StyledTableRow key={row.id}>
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
        <Typography variant="h3" align="center" color="primary">
          Program
        </Typography><br /><br />
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} >
              <Tab label="Day One" {...a11yProps(0)} />
              <Tab label="Day Two" {...a11yProps(1)} />
              <Tab label="Day Three" {...a11yProps(2)} />
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
