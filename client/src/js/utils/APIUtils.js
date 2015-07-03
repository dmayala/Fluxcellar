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
    } catch (err) {
      throw new Error(err);
    }
  },

  async loadWines() {
    try {
      let res = await fetch(endpoint);
      let wines = await res.json();
      ServerActions.receiveWines(wines);
    } catch (err) {
      throw new Error(err);
    }
  },

  async addWine(wine, image) {
    try {
      let form = new FormData();
      Object.keys(wine).forEach((key) => {
        form.append(key, wine[key]);
      });

      if (image) {
        form.append('file', image);
      }

      let res = await fetch(endpoint, { 
        method: 'post', 
        body: form 
      });

      let data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },

  async updateWine(id, wine, image) {
    try {
      let form = new FormData();
      Object.keys(wine).forEach((key) => {
        form.append(key, wine[key]);
      });

      if (image) {
        form.append('file', image);
      }

      let res = await fetch(`${endpoint}/${id}`, { 
        method: 'put', 
        body: form 
      });

      let data = await res.json();
      return data
    } catch (err) {
      throw new Error(err);
    }
  },

  async removeWine(id) {
      let res = await fetch(`${endpoint}/${id}`, { method: 'delete' });
      let data = await res.json();
      return data;
  }
}
