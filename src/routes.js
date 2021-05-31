import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Service from './pages/service';
import Services from './pages/services';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/service' component={Service} />
      <Route path='/services' component={Services} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
