import { LocationInput } from './stylesSearchLocation'

const SearchLocation = props => {
  const location = `${props.city}, ${props.country}`
  return (
    <LocationInput onClick={e => props.setLocation(location)}>
      <i className='fas fa-map-marker-alt fa-lg'></i> {props.city}, {props.country}
    </LocationInput>
  )
}

export default SearchLocation
