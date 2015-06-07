import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import Constants from '../constants/Constants';

const CHANGE_EVENT = 'change';
const PER_PAGE = 8;

let _wines = [];
let _wine = {};
let currPage = 1;

let receiveWines = (wines) =>  _wines = wines; 
let receiveWine = (wine) => _wine = wine;
let setCurrentPage = (pageNo) => currPage = pageNo;

let WineStore = Object.assign({}, EventEmitter.prototype, {
  getWines() { return _wines; },
  getWine() { return _wine; },
  getPages() { 
    if (_wines.length > 0) {
      return Math.ceil(_wines.length/PER_PAGE);
    }
    return 0;
  },
  getCurrentPage() { return currPage; },
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
    case Constants.SET_CURRENT_PAGE:
      setCurrentPage(action.id);
      break;
    default:
      return true;
  }

  WineStore.emitChange();
  return true;
});

export default WineStore;
