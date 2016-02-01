import React from 'react';
import API from '../api';
import LinkStore from '../stores/linkStore';

let _getAppState = () => {
  return {links: LinkStore.getAll()};
};

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    API.getLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log('4. In the view');
    this.setState(_getAppState());
  }

    render() {
      return (
        <div>
          <h3>This is my home page :)</h3>
          <ul>
            <li>Link ...</li>
            <li>Link ...</li>
          </ul>
        </div>
      );
    }
}
