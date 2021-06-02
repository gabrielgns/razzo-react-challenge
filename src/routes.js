import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import businessDetails from './pages/businessDetails';
import businessList from './pages/List';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/business' component={businessDetails} />
      <Route path='/' component={businessList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
