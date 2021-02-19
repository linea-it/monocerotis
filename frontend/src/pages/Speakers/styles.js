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
    padding: '6px 30px',
  },
  infoIcon: {
    verticalAlign: 'middle',
    marginLeft: '8px',
  },
  customWidth: {
    maxWidth: 800,
  },
}));

export default styles;
