import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  appbar: {
    background: '#fff',
    boxShadow: 'none',
  },
  menuList: {
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      overflowY: 'hidden',
      flexDirection: 'column',
      margin: `auto auto ${theme.spacing(1)}px`,

      transitionProperty: 'all',
      transitionDuration: '.5s',
      transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
    }
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
    maxWidth: 160,
    [theme.breakpoints.down('md')]: {
      maxWidth: 100,
    },
  },
  logoInctComputer: {
    maxWidth: 160,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  logoInctMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
      maxWidth: 90,
      margin: '0 10px'
    },
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  menuMobileButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.55rem',
      fontWeight: 600,
      display: 'inline-flex',
    }
  },

  menuMobileOpen: {
    [theme.breakpoints.down('md')]: {
      maxHeight: 230,
    }
  },

  menuMobileClosed: {
    [theme.breakpoints.down('md')]: {
      maxHeight: 0,
      padding: 0,
      margin: 0,
    }
  }
}));

export default styles;
