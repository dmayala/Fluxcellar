const CHANGE_EVENT = 'change';
const PER_PAGE = 8;

class WineStore {

  constructor() {
    this.wines = [];
    this.wine = {};
    this.currentPage = 1;
    this.pages = 1;
    this.bindActions(this.alt.getActions('wines'));
  }
  
  loadWines(wines) {
    this.wines = wines;
    this.pages = this.getPages();
  }

  loadWine(wine) {
    this.wine = wine;
  }

  setCurrentPage(pageNo) {
    this.currentPage = pageNo;
  }

  getWine() {
    return this.wine || {};
  }

  getPages() { 
    let wines = this.wines;
    if (wines.length > 0) {
      return Math.ceil(wines.length/PER_PAGE);
    }
    return 0;
  }
}

export default WineStore;
