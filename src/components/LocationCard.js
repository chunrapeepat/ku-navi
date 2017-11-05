import React from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

const Container = styled.div`
  width: 100%;
  border-radius: 7px;
  background: white;
  display: block;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const Padding = styled.div`
  padding: 10px 15px;
`

const Heading = styled.div`
  font-size: 22px;
  font-family: 'Kanit', sans-serif;
`

const DescriptionLabel = styled.div`
  font-size: 20px;
  color: #777;
  font-family: 'Kanit', sans-serif;
`

const BusLabel = styled.div`
  color: #2A6463;
  background: #FBE755;
  padding: 5px 10px;
  font-family: 'Kanit', sans-serif;
  display: inline-block;
  font-size: 20px;
  margin-top: 25px;
  border-radius: 10px;
`

const OpenInGoogleMap = styled.div`
  float: right;
  ${this} > a {
    color: white;
    background: #2A6463;
    text-decoration: none;
    font-family: 'Kanit', sans-serif;
    display: inline-block;
    font-size: 20px;
    margin-top: 25px;
    border-radius: 10px;
    position: relative;
    padding: 5px 10px;
  }
`

export default (props) => (
  <Container>
    <Padding>
      <Heading>{props.data.title}</Heading>
      <DescriptionLabel>ระยะทางประมาณ 300 เมตร</DescriptionLabel>
      <BusLabel>สาย {props.data.bus}</BusLabel>
      <OpenInGoogleMap>
        <a rel="noopener noreferrer"
           target='_blank'
           href={`https://www.google.com/maps/place/${props.data.gmaps}/@${props.data.location.lat},${props.data.location.lng},50z`}>
           <Ink /> เปิดด้วย Google Maps</a>
      </OpenInGoogleMap>
    </Padding>
  </Container>
)
