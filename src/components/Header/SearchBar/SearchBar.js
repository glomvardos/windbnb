import { Button, Location, Guests, SearchIcon } from './stylesSearchBar'

const SearchBar = () => {
  return (
    <Button>
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
