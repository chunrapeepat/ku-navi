import styled from 'styled-components'

export const Padding = styled.div`
  padding: 20px 15px;
`

export const Heading = styled.div`
  font-size: 25px;
  color: ${props => (props.color) ? props.color : 'black'};
  font-family: 'Kanit', sans-serif;
`
