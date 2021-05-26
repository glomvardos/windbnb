import styled from 'styled-components'

export const Button = styled.button`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1.6rem;
  border-radius: 16px;
  margin: 4rem auto 0 auto;
  border: none;
  outline: none;

  @media (min-width: 530px) {
    margin: 0;
  }
`
export const Location = styled.div`
  font-size: 1.5rem;
`

export const Guests = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  color: #bdbdbd;
`

export const SearchIcon = styled.div`
  i {
    color: #eb5757;
  }
`
