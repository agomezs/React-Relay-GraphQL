import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/ActionTypes';
import {EventEmitter} from 'events';

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          _links = action.links;
          this.emit('change');
          console.log('3. In store');
          break;
        default:
          // do nothing.
      }
    });
  }

  getAll() {
    return _links;
  }
}

export default new LinkStore();
