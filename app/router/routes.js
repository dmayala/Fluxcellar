import React from 'react';
import Router from 'react-router';
import {CellarApp} from '../components/CellarApp.react';
import {Home} from '../components/Home.react';
import {WineList} from '../components/WineList.react';
import {WineAdd} from '../components/WineAdd.react';
import {WineDetails} from '../components/WineDetails.react';
const { Route, DefaultRoute, RouteHandler, Link } = Router;

let routes = (
  <Route handler={CellarApp} path="/">
    <DefaultRoute handler={Home} />
    <Route name="wines" path="wines">
      <DefaultRoute handler={WineList} />
      <Route name="winePage" path="page/:id" handler={WineList} />
      <Route name="wineAdd" path="add" handler={WineAdd} />
      <Route name="wineDetails" path=":id" handler={WineDetails} />
    </Route>
  </Route>
);

export default routes; 
