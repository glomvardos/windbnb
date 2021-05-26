import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 1.5rem;

  @media (min-width: 530px) {
    padding: 3rem;
  }
`
export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 530px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
