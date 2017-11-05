import styled from 'styled-components'
import locationData from './database/ku_places.json'
import qrPlacesData from './database/qr_places.json'
import busRoutesData from './database/bus_routes.json'

export const Padding = styled.div`
  padding: 20px 15px;
`

export const Heading = styled.div`
  font-size: 25px;
  color: ${props => (props.color) ? props.color : 'black'};
  font-family: 'Kanit', sans-serif;
`

export const searchLocation = name => {
  return locationData.filter(x => x.title.indexOf(name) !== -1)
}

export const getCurrentLocation = id => {
  return qrPlacesData.filter(x => x.id === id)
}

export const getBusPath = (bus, index) => {
  const routes = busRoutesData.filter(x => x.line === bus)[0].routes
  const data = []
  for(let i = index; i < index + 3; i++) {
    data.push(routes[i % routes.length])
  }
  return data
}

export const calculateDistance = (lat1, lon1, lat2, lon2, unit = "M") => {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit==="K") { dist = dist * 1.609344 }
    if (unit==="N") { dist = dist * 0.8684 }
    return Math.floor(dist / 1609.34)
}
