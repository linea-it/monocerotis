import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100vw',
  //   height: '25vh',
  //   position: 'absolute',
  //   bottom: '0px',
  //   backgroundImage: 'url(../../img/footer.png)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center top',
  // },
  root: props => ({
    display: 'block',
    backgroundImage: `url(${props.footerBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    height: '25vh',
    [theme.breakpoints.up('xl')]: {
      backgroundPosition: 'top',
      height: '33vh',
    },
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  }),
}));

export default useStyles;
