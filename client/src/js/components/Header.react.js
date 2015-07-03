import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand" href="#">FluxCellar</a>
          </div>
      
          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#wines">Browse Wines</a></li>
              <li><a href="#wines/add"><i className="glyphicon glyphicon-edit"></i> Add Wine</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">About</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-expanded="false">Resources <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="http://documentcloud.github.com/backbone/" target="_blank">Backbone.js</a></li>
                    <li><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a></li>
                    <li><a href="http://nodejs.org/" target="_blank">Node.js</a></li>
                    <li><a href="http://expressjs.com/mongodb" target="_blank">Express</a></li>
                    <li><a href="http://www.mongodb.org/" target="_blank">MongoDB</a></li>
                    <li className="divider"></li>
                    <li className="nav-header">This App</li>
                    <li><a href="#" target="_blank">GitHub Repository</a></li>
                    <li><a href="http://coenraets.org" target="_blank">Authors Blog</a></li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
