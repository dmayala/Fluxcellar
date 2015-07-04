import React from 'react';
import {WineListItem} from './WineListItem.react';
import {Paginator} from './Paginator.react';
import WineStore from '../stores/WineStore';
import WineActions from '../actions/WineActions';

function getState() {
  return {
    wines: WineStore.getWines(),
    pages: WineStore.getPages(),
    currentPage: WineStore.getCurrentPage()
  }
}

export class WineList extends React.Component {

  state = getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    WineStore.addChangeListener(this._onChange);
    WineActions.loadWines();
    this.updatePage();
  }

  componentWillReceiveProps() {
    this.updatePage();
  }

  componentWillUnmount() {
    WineStore.removeChangeListener(this._onChange);
  }

  updatePage = () => {
    let id = this.context.router.getCurrentParams().id || 1;
    WineActions.setCurrentPage(id);
  }

  _onChange = () => {
    this.setState(getState());
  }

  render() {
    let lastIndex = 8 * this.state.currentPage;
    let firstIndex = lastIndex - 8;
    let wines = this.state.wines.slice(firstIndex, lastIndex).map((wine, index) => {
      return (<WineListItem wine={wine} key={index} />); 
    }); 

    return (
      <div className="container">
        <div className="row">
          <div className="thumbnails">
            { wines }
          </div>
        </div>
        <Paginator 
          path={ 'winePage' }
          pages={ this.state.pages }
          currentPage={ this.state.currentPage }
        />
      </div>
    );
  }
}
