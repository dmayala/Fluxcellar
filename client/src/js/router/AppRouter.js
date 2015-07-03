import React from 'react';
import Router from 'react-router';
import {CellarApp} from '../components/CellarApp.react';
import {WineList} from '../components/WineList.react';
const { Route, DefaultRoute, RouteHandler, Link } = Router;

var routes = (
  <Route handler={CellarApp} path="/">
    <DefaultRoute handler={WineList} />
    <Route name="wines" path="wines">
      <DefaultRoute handler={WineList} />
      <Route name="winePage" path="page/:id" handler={WineList} />
    </Route>
  </Route>
);

export default { run: Router.run.bind(this, routes) };
