import React, {Component} from 'react'
import styled from 'styled-components'

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
  render(){
    return(
      <FooterContainer>
        ดูเส้นทางรถตะลัยทั้งหมด
      </FooterContainer>
    )
  }
}
