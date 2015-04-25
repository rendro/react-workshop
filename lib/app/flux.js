import {Flux} from 'flummox';
import TechnologyStore from './stores/technology';
import TechnologyActions from './actions/technology';

export default class AppFlux extends Flux {

  constructor() {
    super();

    this.createActions('technologies', TechnologyActions);
    this.createStore('technologies', TechnologyStore, this);
  }
}
