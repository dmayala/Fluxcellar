import React from 'react/addons';
import {Link} from 'react-router';
const cx = React.addons.classSet;

export class Paginator extends React.Component {
  render() {
    let currPage = Number(this.props.currentPage);
    let pages = Array.from(new Array(this.props.pages), (el, index) => {
      let pageNo = index + 1;
      return (
          <li className={ cx({ 'active': pageNo === currPage }) } key={ index }>
            <Link to={ this.props.path } params={{ id: pageNo }}>
              { pageNo }
            </Link>
          </li>
      );
    });

    return (
      <nav style={{ textAlign: 'center' }}>
        <ul className="pagination">
          { pages }
        </ul>
      </nav>
    );
  }
}
