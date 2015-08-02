import React from 'react';
import {Link} from 'react-router';

export class Home extends React.Component {
  render() {
    return (
      <div className="container" id="content">
        <div>
          <div className="home-hero">
            <h1>Welcome to Node Cellar</h1>

            <h3>A sample Isomorphic Single Page Application built with React, Flux, Alt, Express, and MongoDB</h3><br />

            <div style={{ opacity: '.9' }}>
              <Link className="btn btn-default" to="wines">
                <img className="pull-left" src="img/wine.png" style={{ marginRight: '6px' }} />
                  Start Browsing<br />
                  Node Cellar
              </Link>
              <a className="btn btn-default" href="https://github.com/dmayala/Fluxcellar">
                <img className="pull-left" src="img/github.png" style={{ marginRight: '6px' }} />
                View Project<br />on GitHub
              </a>
            </div>
          </div>

          <div className="bs-docs-social">
            <div className="container">
              <ul className="bs-docs-social-buttons">
                <li><iframe className="github-btn" frameBorder="0" height="20px"
                scrolling="0" src=
                "http://ghbtns.com/github-btn.html?user=dmayala&amp;repo=fluxcellar&amp;type=watch&amp;count=true"
                width="100px"></iframe></li>

                <li><iframe className="github-btn" frameBorder="0" height="20px"
                scrolling="0" src=
                "http://ghbtns.com/github-btn.html?user=dmayala&amp;repo=fluxcellar&amp;type=fork&amp;count=true"
                width="98px"></iframe></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
