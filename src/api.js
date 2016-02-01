import { get } from 'jquery';
import ServerActions from './actions/serverActions';

let API = {
  getLinks() {

    get('/data/links').done(res => {
      console.log('get Links', res);
      ServerActions.reveiveLinks(res);
    });
  }
};

export default API;
