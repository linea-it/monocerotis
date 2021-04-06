import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    margin: 'auto',
    marginTop: 20,
  },
  toolbar: {
    justifyContent: 'center',
  },
  tableCell: {
    padding: '10px',
    backgroundColor: '#283663',
    color: 'white',
    fontSize: '1.5rem',
  },
  tab: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  tbd: {
    color: '#f44336',
  },
  customWidth: {
    maxWidth: 445,
  },
}));

export default styles;
