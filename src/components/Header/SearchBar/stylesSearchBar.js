import styled from 'styled-components'

export const Button = styled.button`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1.6rem;
  border-radius: 32px;
  margin: 4rem auto 0 auto;
  border: none;
  outline: none;

  @media (min-width: 530px) {
    margin: 0;
    border: 1px solid transparent;
    transition: all 200ms;

    &:hover {
      border: 1px solid rgba(235, 87, 87, 0.9);
    }
  }
`
export const Location = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ location }) => (location ? '#333333' : '#bdbdbd')};
`

export const Guests = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ guests }) => (guests ? '#333333' : '#bdbdbd')};
`

export const SearchIcon = styled.div`
  i {
    color: #eb5757;
  }
`
