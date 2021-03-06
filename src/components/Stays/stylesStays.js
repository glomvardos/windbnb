import styled from 'styled-components'

export const Main = styled.main`
  padding: 1.5rem;
  min-height: 70vh;

  @media (min-width: 530px) {
    padding: 3rem;
    min-height: 70vh;
  }
`

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 700;

  @media (min-width: 530px) {
    font-size: 2.4rem;
    line-height: 2.9 rem;
  }
`

export const NumStays = styled.p`
  color: #4f4f4f;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.7rem;
`

export const Grid = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  column-gap: 3rem;
`

export const NoResults = styled.h1`
  text-align: center;
  margin-top: 10rem;
  color: rgba(235, 87, 87, 0.9);
`
