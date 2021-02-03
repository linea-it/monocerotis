/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Grid, Container, Typography, TextField, Button, Snackbar, FormControlLabel, Checkbox, CircularProgress
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

  const history = useHistory();
  const formRef = useRef();
  const autocompleteRef = useRef();
  const recaptchaRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setOpenFormFeedback(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage({});
    setIsLoading(true);

    if(submitEnabled) {
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const country = formRef.current.country.value;
      const newsletter = formRef.current.newsletter.checked;

      // Check if the filled country is available in the options.
      // Prevent it from submitting undesirable values:
      if (countries.filter(c => c.label === country).length === 0) {
        setErrorMessage({ country: ['Please, select one of the country options!'] });

        // Forcing the Autocomplete component to reset:
        autocompleteRef.current.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click();

        return;
      }


      postSubscription({ name, email, institute, newsletter, country })
      .then(() => {
          setOpenFormFeedback(true);
          // Reseting form:
          formRef.current.reset();
          // Forcing the Autocomplete component to reset:
          autocompleteRef.current.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click();

          // Forcing the reCAPTCHA to reset:
          recaptchaRef.current.reset()

          // Forcing the Newsletter checkbox to reset:
          formRef.current.newsletter.checked = false;

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
          setIsLoading(false);
          history.push('/registration/success');
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
            <Typography variant="body1" align="center" color="primary" gutterBottom>(Open until April 2nd, 2021)</Typography>
            <Typography variant="button" color="error" gutterBottom paragraph>After submission, you will receive a confirmation email with the link to complete your registration.</Typography>
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
                  autoComplete={false}
                  renderInput={(params) =>
                    <TextField {...params}
                      required
                      id="country"
                      name="country"
                      label="Country"
                      variant="outlined"
                      placeholder="Countries"
                      autoComplete="off"
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
                      ref={recaptchaRef}
                      sitekey={recaptchaKey}
                      onChange={onRecaptchaChange}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button variant="contained" color="primary" type="submit" disableElevation disabled={!submitEnabled}>
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : <EmailIcon fontSize="small" />}
                    &nbsp;Submit
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
            <Grid item xs={12}>
              <br />
              <Typography variant="button" color="error">* required fields</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openFormFeedback} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <Typography variant="body1">Registered with success! Check your e-mail for a confirmation message.</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registration;
