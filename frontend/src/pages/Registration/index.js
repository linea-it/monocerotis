/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import {
  Grid, Container, Typography, TextField, Button, Snackbar, FormControlLabel, Checkbox
} from '@material-ui/core';
import { Alert, AlertTitle, Autocomplete } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
import countries from './countries.json';
import { postSubscription } from '../../services/api';

function Registration() {

  // Change dynamically the page title:
  document.title = 'LIneA Workshop | Registration';

  const classes = styles();

  const formRef = useRef();
  const autocompleteRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);

  const handleClose = () => setOpenFormFeedback(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(submitEnabled) {
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const country = formRef.current.country.value;
      const newsletter = formRef.current.newsletter.checked;

      postSubscription({ name, email, institute, newsletter, country })
      .then(() => {
          setOpenFormFeedback(true);
          setErrorMessage({});
          formRef.current.reset();
          // formRef.current.country.value = "";
          autocompleteRef.current.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click();
          try {
            window.ga('send', {
              hitType: 'event',
              eventCategory: 'Subscription',
              eventAction: 'subscript',
              eventLabel: 'Subscription Success'
            });
          } catch (err) {
            console.log("Couldn't fire GA event", err);
          }
      })
      .catch(error => {
        setErrorMessage(error.response.data);

        try {
          window.ga('send', {
            hitType: 'event',
            eventCategory: 'Subscription',
            eventAction: 'subscript',
            eventLabel: 'Subscription Failure'
          });
        } catch (err) {
          console.log(err);
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
          <Grid item xs={11} md={6} className={classes.grid}>
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
                  error={'name' in errorMessage}
                  helperText={'name' in errorMessage ? errorMessage.name[0] : ''}
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
                  error={'email' in errorMessage}
                  helperText={'email' in errorMessage ? errorMessage.email[0] : ''}
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
                  error={'institute' in errorMessage}
                  helperText={'institute' in errorMessage ? errorMessage.institute[0] : ''}
                />
              </div>

              <div className={classes.textFields}>
                <Autocomplete
                  ref={autocompleteRef}
                  options={countries}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) =>
                    <TextField {...params}
                      required
                      id="country"
                      name="country"
                      label="Country"
                      variant="outlined"
                      placeholder="Countries"
                      fullWidth
                      size="small"
                      error={'country' in errorMessage}
                      helperText={'country' in errorMessage ? errorMessage.country[0] : ''}
                    />
                  }
                />
              </div>

              <FormControlLabel
                label="Subscribe to LIneA News"
                labelPlacement="start"
                className={classes.checkboxLabel}
                control={
                  <Checkbox
                    name="newsletter"
                  />
                }
              />

              <Grid container spacing={2} alignItems="flex-end">
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
                    <EmailIcon fontSize="small" />
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
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openFormFeedback} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <Typography variant="body1">Registered with sucess! Check your e-mail for a confirmation message.</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registration;
