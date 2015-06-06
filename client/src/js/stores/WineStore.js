import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import Constants from '../constants/Constants';

let _wines = [];
let _wine = {};

let receiveWines = (wines) =>  _wines = wines; 
let receiveWine = (wine) => _wine = wine;

let WineStore = Object.assign({}, EventEmitter.prototype, {
  getWines() { return _wines; },
  getWine() { return _wine; },
  emitChange() { this.emit(CHANGE_EVENT); },
  addChangeListener(cb) { this.on(CHANGE_EVENT, cb); },
  removeChangeListener(cb) { this.removeListener(CHANGE_EVENT, cb); }
});

AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.actionType) {
    case Constants.RECEIVE_ALL_WINES:
      receiveWines(action.data);
      break;
    case Constants.RECEIVE_WINE:
      receiveWine(action.data);
      break;
    default:
      return true;
  }

  WineStore.emitChange();
  return true;
});

export default WineStore;
