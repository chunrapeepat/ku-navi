import React, {Component} from 'react'
import styled from 'styled-components'
import {getBusPath} from '../helper'

const Container = styled.div`
  padding: 10px 20px;
  padding-bottom: 35px;
`

const Heading = styled.div`
  color: #1b5e20;
  padding: 7px 10px;
  border-radius: 5px;
  font-family: 'Kanit', sans-serif;
  background: #F8E66E;
  font-size: 18px;
`

const I = styled.i`
  margin-right: 5px;
`

const LineSvg = styled.img`
  position: absolute;
  padding: 7px 0;
  padding-left: 30px;
`

const BusList = styled.div`
  padding-left: 50px;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  padding-top: 20px;
  color: ${props => (props.active) ? 'black' : '#888'};
`

export default class extends Component {
  render(){
    const path = getBusPath(this.props.data.line, this.props.data.index)
    return(
      <Container>
        <Heading><I className="zmdi zmdi-bus"></I> รถตะลัยสาย {this.props.data.line}</Heading>
        <LineSvg height="150" src="/line.svg"/>
        <BusList active>{path[0]}</BusList>
        <BusList>{path[1]}</BusList>
        <BusList>{path[2]}</BusList>
      </Container>
    )
  }
}
