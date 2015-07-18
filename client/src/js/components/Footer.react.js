import React from 'react';
import {Link} from 'react-router';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="container footer">
        <p className="pull-right"><Link to="/">Back Home</Link></p>

        <p>Built as a sample application with <a href=
        "http://documentcloud.github.com/backbone/">Backbone.js</a>, <a href=
        "http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>, <a href=
        "http://nodejs.org/">Node.js</a>, <a href=
        "http://expressjs.com/">Express</a>, and <a href=
        "http://www.mongodb.org/">MongoDB</a> by <a href="http://coenraets.org"
        target="_blank">Christophe Coenraets</a>.<br />
        The source code for this application is available in <a href="#">this
        repository</a> on GitHub.</p>
      </footer>
    );
  }
}
