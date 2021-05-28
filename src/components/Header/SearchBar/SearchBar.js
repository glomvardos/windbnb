import { useContext } from 'react'
import { context } from '../../../context'
import { Button, Location, Guests, SearchIcon } from './stylesSearchBar'

const SearchBar = props => {
  const { locationBarText, guestsBarText } = useContext(context)
  let guests
  if (guestsBarText === 1) {
    guests = 'guest'
  }

  if (guestsBarText > 1) {
    guests = 'guests'
  }

  return (
    <Button onClick={props.onShowModal}>
      <Location location={locationBarText}>
        <p>{!locationBarText ? 'Add Location' : locationBarText}</p>
      </Location>
      <Guests guests={guestsBarText}>
        {!guestsBarText ? 'Add Guests' : `${guestsBarText} ${guests}`}
      </Guests>
      <SearchIcon>
        <i className='fas fa-search fa-lg'></i>
      </SearchIcon>
    </Button>
  )
}

export default SearchBar
