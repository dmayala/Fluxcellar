import React from 'react';
import {Link} from 'react-router';
import {Navbar, CollapsibleNav, Nav, DropdownButton, MenuItem, NavItem} from 'react-bootstrap';
import {NavItemLink} from 'react-router-bootstrap';

export class Header extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="/">FluxCellar</Link>} toggleNavKey={0} inverse>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <NavItemLink eventKey={1} to="wines">Browse Wines</NavItemLink>
            <NavItemLink eventKey={2} to="wineAdd"><i className="glyphicon glyphicon-edit"></i> Add Wine</NavItemLink>
          </Nav>
          <Nav navbar right>
            <NavItemLink eventKey={3} to="wines">About</NavItemLink>
            <DropdownButton eventKey={4} title="Resources">
              <MenuItem href="https://facebook.github.io/react/">React</MenuItem>
              <MenuItem href="https://facebook.github.io/flux/">Flux</MenuItem>
              <MenuItem href="http://alt.js.org/">Alt</MenuItem>
              <MenuItem href="http://expressjs.com/">Express</MenuItem>
              <MenuItem href="https://www.mongodb.org/">MongoDB</MenuItem>
              <MenuItem divider />
              <MenuItem header>This App</MenuItem>
              <MenuItem href="https://github.com/dmayala/Fluxcellar">GitHub Repository</MenuItem>
            </DropdownButton>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}
