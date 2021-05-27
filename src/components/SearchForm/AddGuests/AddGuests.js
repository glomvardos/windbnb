import { Container, Persons, BtnContainer } from './stylesAddGuests'

const AddGuests = props => {
  const adultsAddCount = e => {
    e.preventDefault()
    props.setAdults(prevCount => prevCount + 1)
    props.setTotalGuests(prevCount => prevCount + 1)
  }

  const childrenAddCount = e => {
    e.preventDefault()
    props.setChildren(prevCount => prevCount + 1)
    props.setTotalGuests(prevCount => prevCount + 1)
  }

  const adultsRemoveCount = e => {
    e.preventDefault()
    props.setAdults(prevCount => prevCount - 1)
    props.setTotalGuests(prevCount => prevCount - 1)
  }

  const childrenRemoveCount = e => {
    e.preventDefault()
    props.setChildren(prevCount => prevCount - 1)
    props.setTotalGuests(prevCount => prevCount - 1)
  }

  return (
    <Container>
      <Persons>
        <h4>Adults</h4>
        <p>Ages 13 or above</p>
        <BtnContainer>
          <button type='button' onClick={adultsRemoveCount} disabled={props.adultsGuests === 0}>
            -
          </button>
          <span>{props.adultsGuests}</span>
          <button type='button' onClick={adultsAddCount} disabled={props.adultsGuests === 5}>
            +
          </button>
        </BtnContainer>
      </Persons>
      <Persons>
        <h4>Children</h4>
        <p>Ages 2-12</p>
        <BtnContainer>
          <button type='button' onClick={childrenRemoveCount} disabled={props.childrenGuests === 0}>
            -
          </button>
          <span>{props.childrenGuests}</span>
          <button type='button' onClick={childrenAddCount} disabled={props.childrenGuests === 5}>
            +
          </button>
        </BtnContainer>
      </Persons>
    </Container>
  )
}

export default AddGuests
