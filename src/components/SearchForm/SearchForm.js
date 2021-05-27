import { useState } from 'react'
import Modal from '../UI/Modal/Modal'
import Input from '../UI/Input/Input'
import SearchLocation from './SearchLocation/SearchLocation'
import AddGuests from './AddGuests/AddGuests'
import { TopContainer, Container, Form, Button } from './stylesSearchForm'

const LOCATIONS = [
  { city: 'Helsinki', country: 'Finland', id: '1' },
  { city: 'Turku', country: 'Finland', id: '2' },
  { city: 'Oulu', country: 'Finland', id: '3' },
  { city: 'Vaasa', country: 'Finland', id: '4' },
]

const SearchForm = props => {
  const [location, setLocation] = useState('')
  const [isLocationFocus, setIsLocationFocus] = useState(false)

  const [adultsGuests, setAdultsGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)
  const [totalGuests, setTotalGuests] = useState(0)
  const [isGuestsFocus, setIsGuestsFocus] = useState(false)

  const displayLocation = LOCATIONS.map(location => (
    <SearchLocation
      key={location.id}
      city={location.city}
      country={location.country}
      setLocation={setLocation}
    />
  ))

  const inputLocationHandler = e => {
    setLocation(e.target.value)
  }

  const inputGuestsHandler = () => {
    setTotalGuests(prevState => prevState)
  }

  const onFocusLocationHandler = () => {
    setIsLocationFocus(true)
    setIsGuestsFocus(false)
  }

  const onFocusGuestHandler = () => {
    setIsGuestsFocus(true)
    setIsLocationFocus(false)
  }

  let guests
  if (totalGuests === 1) {
    guests = 'guest'
  }
  if (totalGuests > 1) {
    guests = 'guests'
  }

  return (
    <Modal onShowModal={props.onShowModal}>
      <TopContainer>
        <p>Edit your search</p>
        <i className='fas fa-times fa-2x' onClick={props.onShowModal}></i>
      </TopContainer>
      <Form>
        <Input
          area='location'
          id='location'
          type='text'
          placeholder='Add Location'
          value={location}
          onChange={inputLocationHandler}
          onFocus={onFocusLocationHandler}
        />

        <Input
          area='guests'
          id='guests'
          type='text'
          placeholder='Add Guests'
          value={totalGuests !== 0 ? `${totalGuests} ${guests}` : ''}
          onChange={inputGuestsHandler}
          onFocus={onFocusGuestHandler}
        />

        {isLocationFocus && <Container gridCol='addLocation'>{displayLocation}</Container>}
        {isGuestsFocus && (
          <Container gridCol='addGuests'>
            <AddGuests
              setAdults={setAdultsGuests}
              setChildren={setChildrenGuests}
              adultsGuests={adultsGuests}
              childrenGuests={childrenGuests}
              setTotalGuests={setTotalGuests}
            />
          </Container>
        )}

        <Button>
          <i className='fas fa-search'></i>Search
        </Button>
      </Form>
    </Modal>
  )
}

export default SearchForm
