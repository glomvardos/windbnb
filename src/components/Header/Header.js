import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import { StyledHeader, Container } from './stylesHeader'

const Header = props => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <SearchBar onShowModal={props.onShowModal} />
      </Container>
    </StyledHeader>
  )
}

export default Header
