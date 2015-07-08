import APIUtils from '../utils/APIUtils';

class WineActions { 

  loadWines() {
    let promise = APIUtils.loadWines();
    promise.then((result) => {
      this.dispatch(result);
    });
    this.alt.resolve(promise);
  }

  loadWine(id) {
    let promise = APIUtils.loadWine(id);
    promise.then((result) => {
      this.dispatch(result);
    });
    this.alt.resolve(promise);
  }

  updateWine(id, data, file) {
    let promise = APIUtils.updateWine(id, data, file);
    promise.then((result) => {
      this.dispatch(result);
    });
    this.alt.resolve(promise);
  }

  addWine(data, file) {
    let promise = APIUtils.addWine(data, file);
    promise.then((result) => {
      this.dispatch(result);
    });
    this.alt.resolve(promise);
  }

  removeWine(id) {
    let promise = APIUtils.removeWine(id);
    promise.then((result) => {
      this.dispatch(result);
    });
    this.alt.resolve(promise);
  }

  setCurrentPage(id) {
    this.dispatch(id);
  }

}

export default WineActions; 
