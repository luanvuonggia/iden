import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Route path={``} component={asyncComponent(() => import('./CRM/index'))}/>
    <Route path={`${match.url}/listing`} component={asyncComponent(() => import('./Listing/index'))}/>
  </Switch>
);

export default Dashboard;
