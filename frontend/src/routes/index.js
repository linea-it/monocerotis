import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Program from '../pages/Program';
import Participants from '../pages/Participants';
import AdditionalInformation from '../pages/AdditionalInformation';
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
          <Route exact path="/program" component={Program} />
          <Route exact path="/participants" component={Participants} />
          <Route exact path="/additional-information" component={AdditionalInformation} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
