import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/Constants'

export default { 

  receiveWines(data) {
    AppDispatcher.handleServerAction({
      actionType: Constants.RECEIVE_ALL_WINES,
      data: data
    }); 
  },

  receiveWine(data) {
    AppDispatcher.handleServerAction({
      actionType: Constants.RECEIVE_WINE,
      data: data
    });
  }
}

