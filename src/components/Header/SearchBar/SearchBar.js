import { Button, Location, Guests, SearchIcon } from './stylesSearchBar'

const SearchBar = props => {
  return (
    <Button onClick={props.onShowModal}>
      <Location>
        <p>Helsinki, Finland</p>
      </Location>
      <Guests>Add guests</Guests>
      <SearchIcon>
        <i className='fas fa-search fa-lg'></i>
      </SearchIcon>
    </Button>
  )
}

export default SearchBar
