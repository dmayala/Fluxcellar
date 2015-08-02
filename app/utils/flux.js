import Alt from 'alt';
import AltResolver from './altResolver';

class Flux extends Alt {

  constructor(config = {}) {
    super(config);

    this._resolver = new AltResolver();

    // Register Actions
    this.addActions('wines', require('../actions/WineActions'));

    // Register Stores
    this.addStore('wines', require('../stores/WineStore'));
  }

  resolve(result) {
    this._resolver.resolve(result);
  }

  render(handler) {
    return this._resolver.render(handler, this);
  }
}

export default Flux;
