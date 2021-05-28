import { useContext } from 'react'
import Stay from './Stay/Stay'
import Spinner from '../UI/Spinner/Spinner'
import Error from '../UI/Error/Error'
import { context } from '../../context'
import { Main, Container, Title, NumStays, Grid, NoResults } from './stylesStays'

const Stays = () => {
  const { filteredStays, isLoading, error } = useContext(context)

  const displayStays = filteredStays.map(stay => (
    <Stay
      key={stay.id}
      photo={stay.photo}
      superHost={stay.superHost}
      type={stay.type}
      beds={stay.beds}
      rating={stay.rating}
      title={stay.title}
    />
  ))

  let numOfStays
  if (filteredStays.length === 1) {
    numOfStays = 'stay'
  }

  if (filteredStays.length > 1) {
    numOfStays = 'stays'
  }

  if (isLoading) {
    return (
      <Main>
        <Spinner />
      </Main>
    )
  }

  if (error) {
    return (
      <Main>
        <Error />
      </Main>
    )
  }

  return (
    <Main>
      <Container>
        <Title>Stays in Finland</Title>
        <NumStays>
          {filteredStays.length === 0 ? '0 stays' : `${filteredStays.length} ${numOfStays}`}
        </NumStays>
      </Container>
      <Grid>{displayStays}</Grid>
      {displayStays.length === 0 && <NoResults>No results found!</NoResults>}
    </Main>
  )
}

export default Stays
