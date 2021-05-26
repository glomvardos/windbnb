import { useContext } from 'react'
import Stay from './Stay/Stay'
import { context } from '../../context'
import { Main, Container, Title, NumStays, Grid } from './stylesStays'

const Stays = () => {
  const { stays } = useContext(context)

  const displayStays = stays.map(stay => (
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

  return (
    <Main>
      <Container>
        <Title>Stays in Finland</Title>
        <NumStays>12+ stays</NumStays>
      </Container>
      <Grid>{displayStays}</Grid>
    </Main>
  )
}

export default Stays
