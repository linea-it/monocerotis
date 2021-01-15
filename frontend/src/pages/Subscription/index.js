import React, { useRef, useEffect } from 'react'
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { postSubscription, getSubscriptions } from '../../services/api'

function Subscription() {
  const formRef = useRef();

  const handleSubmitForm = () => {
    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const institute = formRef.current.institute.value;
    const newsletter = formRef.current.newsletter.checked;

    postSubscription({ name, email, institute, newsletter })
      .then(res => {
        console.log('post', res)
      })
  }

  useEffect(() => {
    getSubscriptions()
      .then(res => {
        console.log('get', res)
      })
  }, [])

  return(
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form ref={formRef} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Name" name="name" />

              </Grid>
              <Grid item xs={12}>
                <TextField label="E-mail" name="email" />

              </Grid>
              <Grid item xs={12}>
                <TextField label="Institute" name="institute" />

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="newsletter" />}
                  label="Newsletter Permission"
                  labelPlacement="start"
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" onClick={handleSubmitForm}>
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Subscription
