import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/Constants'
import APIUtils from '../utils/APIUtils';

export default { 

  loadWines() {
    AppDispatcher.handleViewAction({
      actionType: Constants.LOAD_WINES
    });
    APIUtils.loadWines();
  },

  loadWine(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.LOAD_WINE,
      id: id
    }); 
    APIUtils.loadWine(id);
  },

  updateWine(id, data, file) {
    AppDispatcher.handleViewAction({
      actionType: Constants.UPDATE_WINE,
      data: data
    }); 
    APIUtils.updateWine(id, data, file);
  },

  addWine(data, file) {
    AppDispatcher.handleViewAction({
      actionType: Constants.ADD_WINE,
      data: data
    }); 
    APIUtils.addWine(data, file);
  },

  removeWine(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.REMOVE_WINE,
      id: id
    }); 
    APIUtils.removeWine(id);
  },

  setCurrentPage(id) {
    AppDispatcher.handleViewAction({
      actionType: Constants.SET_CURRENT_PAGE,
      id: id
    }); 
  }

}

