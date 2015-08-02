import React from 'react';
import {Header} from './Header.react';
import {Footer} from './Footer.react';
import {RouteHandler} from 'react-router';

export class CellarApp extends React.Component {
  render() {
    const props = Object.assign({}, this.state, this.props);
    return (
      <div>
        <Header {...props}/>
        <RouteHandler {...props}/>
        <Footer />
      </div>
    );
  }
}
