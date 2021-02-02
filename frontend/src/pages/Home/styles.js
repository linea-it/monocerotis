import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  onlineText : {
    fontSize: '1.5rem',
    fontFamily: 'Roboto,"Helvetica Neue",Arial',
    fontWeight: '400',
    lineHeight: '1.334',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      fontSize: '1.1rem'
    }
  },
  subtitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
    },
  },
  date: {
    fontSize: '1.8rem',
  },
  blockTitle: {
    fontSize: '1.6rem',
  },
  blockText: {
    fontSize: '1.4rem',
  },
}));

export default styles;
