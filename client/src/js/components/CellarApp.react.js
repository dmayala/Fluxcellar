import React from 'react';
import {Header} from './Header.react';
import {RouteHandler} from 'react-router';

export class CellarApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}
