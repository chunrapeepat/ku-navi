import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`

const Heading = styled.div`
  font-size: 22px;
  font-family: 'Kanit', sans-serif;
  border-radius: 7px;
  padding: 7px 20px;
  background: #ff5f6d;
  background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371);
  background: linear-gradient(to right, #ff5f6d, #ffc371);
`

const Element = styled.div`
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #ccc;
  border-radius: 5px;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  padding: 7px 20px;
`

export default (props) => (
  <Container>
    <Heading>รถตะลัยสาย {props.no}</Heading>
    {props.routes.map((route, i) => {
      return <Element key={i}>{route}</Element>
    })}
  </Container>
)
