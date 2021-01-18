import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '25vh',
    position: 'absolute',
    bottom: '0px',
    backgroundImage: 'url(../../img/footer.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
}));

export default useStyles;
