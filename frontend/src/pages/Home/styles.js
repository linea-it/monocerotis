import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  organizing : {
    [theme.breakpoints.up('md')]: {
      padding: '0 28%',
    }
  },
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
  title: {

  },
  subtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
    }
  },
  date: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    }
  },
  blockTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem',
    }
  },
  blockText: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      textAlign: 'center'
    }
  },
}));

export default styles;
