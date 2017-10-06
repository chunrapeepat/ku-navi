import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import InformationContainer from './containers/information'
import SearchContainer from './containers/search'
import './design.css'

class App extends React.Component {
  render(){
    return (
      <div>
        <SearchContainer />
        <InformationContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
