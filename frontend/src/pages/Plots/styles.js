import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  grid: {
    margin: 'auto',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
  },
  description: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      textAlign: 'justify',
    },
  },
}));

export default styles;
