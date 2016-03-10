import React from 'react';
import API from '../api';
import LinkStore from '../stores/linkStore';

let _getAppState = () => {
  return {links: LinkStore.getAll()};
};

class HomePage extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number
  };

  static defaultProps = {
    limit: 6
  };

  state = _getAppState(); // Each instance of the components needs its own state

  // constructor(props) {
  //   super(props);
  //   this.state = _getAppState(); // Each instance of the components needs its own state
  //   this.onChange = this.onChange.bind(this);
  // }

  componentDidMount() {
    API.getLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  // A property, not a function.
  onChange = () => {
    console.log('4. In the view');
    this.setState(_getAppState());
  };

    render() {
      let linksContent = this.state.links.slice(0, this.props.limit).map(link => {
        return <li key={link._id}>
                <a href={link.url}>{link.title}</a>
              </li>
      });
      return (
        <div>
          <h3>This is my home page :)</h3>
          <ul>
            {linksContent}
          </ul>
        </div>
      );
    }
}

export default HomePage;

// HomePage.defaultProps = {
//   limit: 10
// };
