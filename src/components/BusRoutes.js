import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import {Padding, Heading} from '../helper'
import BusCard from './BusCard'
import BusRoutesJSON from '../database/bus_routes.json'

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: calc(100vh - 47px);
  background: white;
  overflow-y: scroll;
  transition: 0.5s;
  background: #000000;
  background: -webkit-linear-gradient(to right, #000000, #434343);
  background: linear-gradient(to right, #000000, #434343);
`

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  color: white;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 0;
  background: #006664;
  cursor: pointer;
`

export default class extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  toggleBusRoutes() {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    return(
      <div>
        <Container style={{bottom: (this.state.open) ? '47px' : '-100vh'}}>
          <Padding>
            <Heading color="white">เส้นทางรถตะลัยทั้งหมด</Heading>
            {BusRoutesJSON.map((bus, i) => {
              return <BusCard no={bus.line} routes={bus.routes} key={i}/>
            })}
          </Padding>
        </Container>
        <FooterContainer onClick={() => this.toggleBusRoutes()}>
          <Ink />
          {this.state.open ? 'คลิกที่นี่เพื่อปิดหน้าต่าง' : 'ดูเส้นทางรถตะลัยทั้งหมด'}
        </FooterContainer>
      </div>
    )
  }
}
