import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './App';
import HomeWrapper from './wrappers/HomeWrapper';
import RegisterWrapper from './wrappers/RegisterWrapper';
import LoginWrapper from './wrappers/LoginWrapper';
import DashboardWrapper from './wrappers/DashboardWrapper';
import NewHobbyWrapper from './wrappers/NewHobbyWrapper';
import EditHobbyWrapper from './wrappers/EditHobbyWrapper';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={HomeWrapper} />
    <Route path="/register" component={RegisterWrapper} />
    <Route path="/login" component={LoginWrapper} />
    <Route path="/dashboard" component={DashboardWrapper} />
    <Route path="/hobbies/new" component={NewHobbyWrapper} />
    <Route path="/hobbies/:hobbySlug/edit" component={EditHobbyWrapper} />
  </Route>
);

export default routes;
