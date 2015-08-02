import {Form} from './common/Form.react';

export class WineAdd extends Form {

  getState() {
    return Object.assign(super.getState(), {
      title: 'Add a Wine',
      wine: {},
      file: {}
    });
  }

  _onSave = (e) => {
    e.preventDefault();
    let wine = Object.assign({}, this.state.wine);
    this.props.flux.getActions('wines').addWine(wine, this.state.file);
    this.setState({ shouldHide: false });
  }

}
