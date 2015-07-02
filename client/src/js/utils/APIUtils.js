import Polyfill from 'babelify/polyfill';
import Fetch from 'whatwg-fetch';
import ServerActions from '../actions/ServerActions';

const endpoint = 'api/wines';

export default {
  
  async loadWine(id) {
    try {
      let res = await fetch(`${endpoint}/${id}`);
      let wine = await res.json();
      ServerActions.receiveWine(wine);
    }
    catch (err) {
      throw new Error(err);
    }
  }

  async loadWines() {
    try {
      let res = await fetch(endpoint);
      let wines = await res.json();
      ServerActions.receiveWines(wines);
    } catch (err) {
      throw new Error(err);
    }
  }
}
