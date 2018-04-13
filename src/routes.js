import React from 'react';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
      <div>  

        <Route component={Dashboard} exact path= '/'/>
        <Route component={Wizard}  path='/wizard'/>
       
      </div>
  </Switch>
)