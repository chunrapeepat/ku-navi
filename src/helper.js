import styled from 'styled-components'
import locationData from './database/ku_places.json'

export const Padding = styled.div`
  padding: 20px 15px;
`

export const Heading = styled.div`
  font-size: 25px;
  color: ${props => (props.color) ? props.color : 'black'};
  font-family: 'Kanit', sans-serif;
`

export const searchLocation = (name) => {
  return locationData.filter(x => x.title.indexOf(name) !== -1)
}
