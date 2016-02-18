import AppDispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

let ServerActions = {
  reveiveLinks(links) {
    let action = {
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    };
    console.log("2. Here");
    AppDispatcher.dispatch(action);
  }
};

export default ServerActions;
