import React from 'react';
import {WineListItem} from './WineListItem.react';
import {Paginator} from './Paginator.react';

export class WineList extends React.Component {

  state = this.props.flux
                    .getStore('wines')
                    .getState();

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.flux
              .getActions('wines')
              .loadWines();
    this.updatePage();
  }

  componentDidMount() {
    this.props.flux
              .getStore('wines')
              .listen(this._onChange);
  }

  componentWillReceiveProps() {
    this.updatePage();
  }

  componentWillUnmount() {
    this.props.flux
              .getStore('wines')
              .unlisten(this._onChange);
  }

  updatePage = () => {
    let id = this.context.router.getCurrentParams().id || 1;
    this.props.flux.getActions('wines').setCurrentPage(id);
  }

  _onChange = (state) => {
    return this.setState(state);
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
