import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BusinessDetails from './pages/Detailed/index';
import businessList from './pages/List';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/business' component={BusinessDetails} />
      <Route path='/' component={businessList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
