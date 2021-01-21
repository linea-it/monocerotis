import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  // footer: {
  //   display: 'block',
  //   height: '25vh',
  //   [theme.breakpoints.up('xl')]: {
  //     backgroundPosition: 'top',
  //     height: '30vh',
  //   },
  // },

  // footerImg: props => ({
  //   display: 'block',
  //   backgroundImage: `url(${props.footerBg})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100%',
  //   backgroundPosition: 'bottom',
  //   height: '25vh',
  //   [theme.breakpoints.up('xl')]: {
  //     backgroundPosition: 'top',
  //     height: '30vh',
  //   },
  // }),

  footer: {
    display: 'flex',
    marginTop: 20,
  },

  footerImg: {
    width: '100%',
  }

}));

export default useStyles;
