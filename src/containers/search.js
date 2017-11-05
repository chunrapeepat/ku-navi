import React, {Component} from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  outline: none;
  width: calc(100% - 40px);
  border: 0;
  padding: 15px 20px;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
  border-bottom: 1px solid #ccc;
`

const Background = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  height: calc(100% - 58px);
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  display: ${props => (props.display) ? 'block' : 'none'};
`

export default class extends Component {

  constructor(){
    super()
    this.state = {
      display: false
    }
  }

  openBackground(){
    this.setState({ display: true })
  }

  closeBackground(){
    this.setState({ display: false })
  }

  render(){
    return (
      <div>
        <SearchInput
          onClick={() => this.openBackground()}
          placeholder='ค้นหาสถานที่...'/>
        <Background
          onClick={() => this.closeBackground()}
          display={this.state.display}/>
      </div>
    )
  }
}
