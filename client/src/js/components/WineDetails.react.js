import React from 'react';
import WineStore from '../stores/WineStore';
import WineActions from '../actions/WineActions';
import {Form} from './common/Form.react';

export class WineDetails extends Form {
  getState() {
    return Object.assign(super.getState(), {
      title: 'Wine Details',
      wine: WineStore.getWine(),
      file: {}
    });
  }

  _onSave = (e) => {
    e.preventDefault();
    let wine = Object.assign({}, this.state.wine);
    WineActions.updateWine(wine._id, wine, this.state.file);
    this.setState({ shouldHide: false });
  }
} 
