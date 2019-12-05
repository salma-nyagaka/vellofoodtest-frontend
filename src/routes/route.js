// react libraries
import React from 'react';
// third party packages
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/Landingpage'
import Order from '../components/Order'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/order" component={Order} />
      
    </Switch>
  </BrowserRouter>

);

export default Routes;