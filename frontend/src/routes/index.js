import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import RegistrationSuccess from '../pages/Registration/Success';
import Program from '../pages/Program';
import Speakers from '../pages/Speakers';
import Participants from '../pages/Participants';
import AdditionalInformation from '../pages/AdditionalInformation';
import VerifyEmail from '../pages/VerifyEmail';
import Plots from '../pages/Plots';
import Notfound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useStyles from './styles';

export default function Routes() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route
            exact
            path="/registration/success"
            component={RegistrationSuccess}
          />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/program" component={Program} />
          <Route exact path="/participants" component={Participants} />
          <Route
            exact
            path="/additional-information"
            component={AdditionalInformation}
          />
          <Route
            exact
            path="/verify-email/uid=:uid/token=:token"
            component={VerifyEmail}
          />
          <Route isPrivate exact path="/plots" component={Plots} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
