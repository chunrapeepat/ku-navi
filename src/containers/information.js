import React, {Component} from 'react'
import styled from 'styled-components'

import BusCard from '../components/bus'

const ImageContainer = styled.div`
  width: 100%;
  height: 115px;
  background: #2A6564;
`

const SubInformation = styled.div`
  padding: 15px 20px;
  width: calc(100% - 40px);
  color: white;
  background: rgba(0,0,0,0.5);
  font-size: 18px;
  margin-top: -57px;
  font-family: 'Kanit', sans-serif;
`

const Heading = styled.h1`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  padding: 15px 20px;
  padding-top: 23px;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
`

const PlaceDescription = styled.span`
  display: block;
  color: #aaa;
  font-family: 'Kanit', sans-serif;
  padding: 15px 20px;
  padding-top: 0;
  margin-top: -10px;
  font-size: 18px;
`

export default class extends Component {
  render(){
    return (
      <div>
        <ImageContainer/>
        <SubInformation><i className="zmdi zmdi-pin"></i> ตอนนี้คุณอยู่ที่</SubInformation>
        <Heading>{this.props.data.title}</Heading>
        <PlaceDescription>{this.props.data.description}</PlaceDescription>
        { this.props.data.bus.map((x, i) => {
          return <BusCard key={i} data={x} />
        })}
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
