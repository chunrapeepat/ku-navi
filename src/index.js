import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import SearchContainer from './containers/search'
import './design.css'

class App extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
