import React, { useRef, useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Snackbar, FormControlLabel, Checkbox
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
import { postSubscription } from '../../services/api';

function Registration() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Registration';

  const classes = styles();

  const formRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [open, setOpen] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);

  const handleClose = () => {
    setOpen('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(submitEnabled) {

      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const newsletter = formRef.current.newsletter.checked;

      // console.log({
      //   name,
      //   email,
      //   institute,
      //   newsletter,
      // });
      postSubscription({ name, email, institute, newsletter })
        .then(res => {
          if (res.status === 200) {
            setOpen('success');
            formRef.current.reset();
          } else {
            setOpen('unexpected');
          }
      })
    }
  };

  const onRecaptchaChange = humanKey => {
    if(humanKey) {
      setSubmitEnabled(true);
    }
  }

  return (
    <div className={classes.initContainer}>
      <Container>
        <Grid item xs={12}>
          <Grid item xs={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="textPrimary">Registration</Typography>
            <br /><br />
            <form
              ref={formRef}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className={classes.textFields}>
                <TextField
                  required
                  id="name"
                  type="text"
                  variant="outlined"
                  label="Name"
                  name="name"
                  placeholder="Name"
                  fullWidth
                  size="small"
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="email"
                  type="email"
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  placeholder="E-mail"
                  fullWidth
                  size="small"
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="institute"
                  type="text"
                  variant="outlined"
                  label="Institute"
                  name="institute"
                  placeholder="Subject"
                  fullWidth
                  size="small"
                />
              </div>

              <FormControlLabel
                  control={<Checkbox name="newsletter" />}
                  label="Newsletter Permission"
                  labelPlacement="start"
              />

              {recaptchaKey ? (
                <ReCAPTCHA
                  sitekey={recaptchaKey}
                  onChange={onRecaptchaChange}
                />
              ) : null}
              <Grid container alignItems="flex-end">
                <Grid item xs={10} />
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" type="submit" disableElevation disabled={!submitEnabled}>
                    <EmailIcon />
                    &nbsp;Submit
                  </Button>
                </Grid>
              </Grid>

            </form>
          </Grid>
        </Grid>
      </Container>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open === 'success'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <p>sucess.</p>
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open === 'unexpected'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <p>
          <p>unexpected.</p>
          </p>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registration;
