import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    width: auto;
    max-width: 100%;
    grid-row: 1;
    grid-column: ${({ gridArea }) => (gridArea === 'location' ? '1/2' : '2/3')};
  }
`
export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.1rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
`
export const StyledInput = styled.input`
  border: none;
  max-width: 50%;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 400;
  outline: none;
  padding: 1rem 0rem;
  border-radius: 14px;

  &::placeholder {
    color: #bdbdbd;
  }

  @media (min-width: 600px) {
    max-width: 70%;
  }
`
