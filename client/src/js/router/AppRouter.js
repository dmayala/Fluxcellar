import React from 'react';
import Router from 'react-router';
import {CellarApp} from '../components/CellarApp.react';
import {WineList} from '../components/WineList.react';
import {WineAdd} from '../components/WineAdd.react';
import {WineDetails} from '../components/WineDetails.react';
const { Route, DefaultRoute, RouteHandler, Link } = Router;

var routes = (
  <Route handler={CellarApp} path="/">
    <DefaultRoute handler={WineList} />
    <Route name="wines" path="wines">
      <DefaultRoute handler={WineList} />
      <Route name="winePage" path="page/:id" handler={WineList} />
      <Route name="wineAdd" path="add" handler={WineAdd} />
      <Route name="wineDetails" path=":id" handler={WineDetails} />
    </Route>
  </Route>
);

export default { run: Router.run.bind(this, routes) };
