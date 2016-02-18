import { get } from 'jquery';
import { post } from 'jquery';
import ServerActions from './actions/serverActions';

let API = {
  getLinks() {

    post('/graphql', {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    }).done(resp => {
      ServerActions.reveiveLinks(resp.data.links);
    });
  }
};

export default API;
