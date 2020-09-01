import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/produto/:producturl">
      <Home />
    </Route>
  </Switch>
);

export default Routes;