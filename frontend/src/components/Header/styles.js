import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  appbar: {
    background: '#fff',
    boxShadow: 'none',
  },
  menuList: {
    display: 'flex',
    margin: 'auto',
  },
  listItem: {
    justifyContent: 'center',
  },
  menuLink: {
    fontSize: 'larger',
    textDecoration: 'none',
    fontWeight: 600,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    color: '#283663'
  },
  logo: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 160,
    },
    maxWidth: 160,
  },
  toolbar: {
    padding: 0,
  },
}));

export default styles;
