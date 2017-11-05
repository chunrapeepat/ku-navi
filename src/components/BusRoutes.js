import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

const Padding = styled.div`
  padding: 20px;
`

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: calc(100vh - 47px);
  background: white;
  overflow-y: scroll;
  transition: 0.5s;
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
            What the hecl
          </Padding>
        </Container>
        <FooterContainer onClick={() => this.toggleBusRoutes()}>
          <Ink />
          ดูเส้นทางรถตะลัยทั้งหมด
        </FooterContainer>
      </div>
    )
  }
}
