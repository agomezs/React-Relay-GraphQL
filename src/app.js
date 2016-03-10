import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import HomePage from './components/homePage';

ReactDOM.render(<HomePage />, document.getElementById('my-app'));

// console.log(
//   // Tag Tempalte Strings
//   Relay.QL`
//     query TESTNAME{
//       links {
//         title
//       }
//     }
//   `
// );
