import React from 'react';
import {Link} from 'react-router';
export class WineListItem extends React.Component {
  
  render() {
    let wine = this.props.wine;
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <Link to={ `/wines/${ wine._id }` } className="thumbnail plain" style={{ textAlign: 'center' }}>
          <img src={ `/pics/${ wine.picture || 'generic.jpg' }` } height="150" width="125" alt="" />
          <h5>{ wine.name }</h5>
          { wine.year} { wine.grapes }<br />
          <i className="glyphicon glyphicon-globe"></i> 
          { wine.region }, { wine.country }
        </Link>
      </div>
    );
  }
}
