import styled from 'styled-components'

export const LocationInput = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8rem;
  margin-bottom: 3rem;
  cursor: default;
  max-width: 150px;

  i {
    margin-right: 1rem;
  }

  @media (min-width: 600px) {
    i {
      transition: all 200ms;
    }
    &:hover {
      i {
        color: rgba(235, 87, 87, 0.9);
      }
    }
  }
`
