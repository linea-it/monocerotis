import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  Grid, Container, Typography, Link,
} from '@material-ui/core';
import { getVerifyEmail } from '../../services/api';
import styles from './styles';

function VerifyEmail() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Verify E-mail';

  const { uid, token } = useParams();
  const [ objectMensage, setObjectMensage ] = useState({});

  useEffect(() => {
    // console.log({ uid, token } );
    getVerifyEmail( { uid, token } )
    .then(res => {
      if (res.error) {
        setObjectMensage({
          type: 'error',
          message: res.error,
        });
      }else {
        setObjectMensage({
          type: 'success',
          message: res.success,
        });
      }
    })
  }, []);

  const classes = styles();
  return (
    <Container>
      <Grid
        item
        xs={12}
      >
          <div className={classes.verifyEmail}>
            <Typography variant="h1" color="success" className={`${classes.title} ${objectMensage.type === 'success' ? classes.success : classes.error}`}>{objectMensage.type}</Typography>
            <Typography variant="h2" className={`${classes.subTitle} ${objectMensage.type === 'success' ? classes.success : classes.error}`}>
              <br />{objectMensage.message}
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {' '}
              <Link color="inherit" className={classes.returnPage} href="/">Return to homepage</Link>
            </Typography>
          </div>
      </Grid>
    </Container>
  );
}

export default VerifyEmail;
