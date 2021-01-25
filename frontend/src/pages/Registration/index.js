/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Snackbar, FormControlLabel, Checkbox
} from '@material-ui/core';
import { Alert, AlertTitle, Autocomplete } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
import countries from './countries';
import { postSubscription } from '../../services/api';

function Registration() {
  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Registration';

  const classes = styles();

  const formRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [open, setopen] = useState('');
  const [errorMensage, setErrorMensage] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);

  const handleClose = () => {
    setopen('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(submitEnabled) {
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const country = formRef.current.country.value;
      const newsletter = formRef.current.newsletter.checked;

      postSubscription({ name, email, institute, newsletter, country })
      .then((res) => {
        // console.log(res);
        if (res && res.data && res.data.id) {
          setopen('success');
          setErrorMensage('');
          formRef.current.reset();
          try {
            window.ga('send', {
              hitType: 'event',
              eventCategory: 'Subscription',
              eventAction: 'subscript',
              eventLabel: 'Subscription Success'
            });
          } catch (error) {
            // console.log(error);
          }
        }else {
          // setErrorMensage(res.email ? res.email[0] : res.name ? res.name[0] : res.affiliation ? res.affiliation[0] : '');
          try {
            window.ga('send', {
              hitType: 'event',
              eventCategory: 'Subscription',
              eventAction: 'subscript',
              eventLabel: 'Subscription Failure'
            });
          } catch (error) {
            // console.log(error);
          }
          setopen('unexpected');
        }
      });
    }
  };

  const onRecaptchaChange = humanKey => {
    if(humanKey) {
      setSubmitEnabled(true);
    }
  }

  return (
    <div>
      <Container align="center">
        <Grid item xs={12}>
          <Grid item xs={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="primary">Registration</Typography>
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
                  error={errorMensage.includes('name')}
                  helperText={errorMensage.includes('name') ? errorMensage : ''}
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
                  error={errorMensage.includes('email')}
                  helperText={errorMensage.includes('email') ? errorMensage : ''}
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="institute"
                  type="text"
                  variant="outlined"
                  label="Affiliation"
                  name="institute"
                  placeholder="Subject"
                  fullWidth
                  size="small"
                  error={errorMensage.includes('institute')}
                  helperText={errorMensage.includes('institute') ? errorMensage : ''}
                />
              </div>

              <div className={classes.textFields}>
                <Autocomplete
                  id="country"
                  name="country"
                  options={countries}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => 
                    <TextField {...params} 
                      label="Country" 
                      variant="outlined" 
                      required
                      id="country"
                      placeholder="Countries"
                      fullWidth
                      size="small"/>
                  }
                />
              </div>

              <FormControlLabel
                control={<Checkbox name="newsletter" />}
                label="Subscribe to LIneA News"
                labelPlacement="start"
                className={classes.checkboxLabel}
              />

              <Grid container alignItems="flex-end">
                <Grid item xs={12} md={10} >
                  {recaptchaKey ? (
                    <ReCAPTCHA
                      sitekey={recaptchaKey}
                      onChange={onRecaptchaChange}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button variant="contained" color="primary" type="submit" disableElevation disabled={!submitEnabled}>
                    <EmailIcon />
                    &nbsp;Submit
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
            <Grid item xs={12}>
              <br /><Typography variant="body1" color="error">* required fields</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open === 'success'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <Typography variant="body1">Success</Typography><br />
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open === 'unexpected'} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <Typography variant="body1">{errorMensage}</Typography><br />
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registration;
