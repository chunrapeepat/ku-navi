import React, {Component} from 'react'
import styled from 'styled-components'

import {Padding, searchLocation} from '../helper'
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
  background: rgba(0,0,0,0.7);
  padding-top: 5px;
  z-index: 9999999;
  overflow-y: scroll;
  display: ${props => (props.display) ? 'block' : 'none'};
`

const SearchNotFoundLabel = styled.div`
  font-size: 20px;
  color: white;
  font-family: 'Kanit', sans-serif;
  text-align: center;
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
            {searchLocation(this.state.search).length === 0 &&
              <SearchNotFoundLabel>ไม่พบผลการค้นหา</SearchNotFoundLabel>
            }
            {searchLocation(this.state.search).length > 0 &&
              searchLocation(this.state.search).map((x, i) => {
                return <LocationCard data={x} key={i}/>
              })
            }
          </Padding>
        </Background>
      </div>
    )
  }
}
