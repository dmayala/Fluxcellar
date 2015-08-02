import React from 'react';
import {Form} from './common/Form.react';

export class WineDetails extends Form {
  getState() {
    return Object.assign(super.getState(), {
      title: 'Wine Details',
      wine: this.props.flux
                      .getStore('wines')
                      .getState().wine,
      file: {}
    });
  }

  _onSave = (e) => {
    e.preventDefault();
    let wine = Object.assign({}, this.state.wine);
    this.props.flux.getActions('wines').updateWine(wine._id, wine, this.state.file);
    this.setState({ shouldHide: false });
  }
} 
