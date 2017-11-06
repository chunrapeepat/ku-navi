import React from 'react';
import ReactDOM from 'react-dom';

import InformationContainer from './containers/information'
import SearchContainer from './containers/search'
import './design.css'

import {injectGlobal} from 'styled-components'
import BusRoutes from './components/BusRoutes'
import {getCurrentLocation} from './helper'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }
  componentWillMount() {
    let id = (new URL(window.location.href)).searchParams.get('id')
    let info = getCurrentLocation(id)
    window.history.replaceState(null, null, window.location.pathname)
    // if not found info of that id
    if (info.length === 0) {
      injectGlobal`
        body {
          display: none;
        }
      `
    } else {
      this.setState({ info })
    }
  }
  render(){
    return (
      <div>
        <BusRoutes />
        <SearchContainer location={this.state.info[0].location}/>
        <InformationContainer data={this.state.info[0]}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
