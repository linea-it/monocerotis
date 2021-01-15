import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Subscription from '../pages/Subscription'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/subscription" component={Subscription} />
    </Switch>
  );
}
