import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  registrationSuccess: {
    textAlign: 'center',
  },
  title: {
    fontSize: '60px',
    fontWeight: 200,
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: '33px',
    fontWeight: 200,
    marginTop: '0px',
    marginBottom: '25px',
    letterSpacing: '3px',
  },
  description: {
    fontSize: '16px',
    fontWeight: 200,
    marginTop: '0px',
    marginBottom: '25px',
  },
  icon: {
    border: '1px solid #949494',
    margin: '10px',
  },
  returnPage: {
    fontWeight: 200,
    textDecoration: 'none',
    borderBottom: '1px dashed #949494',
    borderRadius: '2px',
    float: 'right',
    marginRight: '11vw',
  },
  success: {
    color: '#4caf50'
  },
  error: {
    color: '#f44336'
  }
}));

export default styles;
