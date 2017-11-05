import React from 'react';
import ReactDOM from 'react-dom';

import InformationContainer from './containers/information'
import SearchContainer from './containers/search'
import './design.css'

import BusRoutes from './components/BusRoutes'

class App extends React.Component {
  // page: place, bus_routes, search
  constructor() {
    super()
    this.state = {
      page: 'place'
    }
  }
  render(){
    return (
      <div>
        <SearchContainer />
        <InformationContainer />
        <BusRoutes />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
