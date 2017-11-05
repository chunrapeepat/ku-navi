import React, {Component} from 'react'
import styled from 'styled-components'

import {Padding} from '../helper'
import LocationCard from '../components/LocationCard'

const SearchInput = styled.input`
  outline: none;
  position: fixed;
  z-index: 9999;
  width: calc(100% - 40px);
  border: 0;
  padding: 15px 20px;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
  border-bottom: 1px solid #ccc;
`

const Background = styled.div`
  position: fixed;
  top: 58px;
  left: 0;
  height: calc(100% - 58px);
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  overflow-y: scroll;
  display: ${props => (props.display) ? 'block' : 'none'};
`

export default class extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
    }
  }
  searchChange(e) {
    this.setState({ search: e.target.value})
  }
  render() {
    return (
      <div>
        <SearchInput
          onChange={this.searchChange.bind(this)}
          placeholder='ค้นหาสถานที่...'/>
        <Background display={this.state.search !== ''}>
          <Padding>
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </Padding>
        </Background>
      </div>
    )
  }
}
