import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import { StyledHeader, Container } from './stylesHeader'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <SearchBar />
      </Container>
    </StyledHeader>
  )
}

export default Header
