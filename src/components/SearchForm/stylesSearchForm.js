import styled from 'styled-components'

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;

  p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  @media (min-width: 530px) {
    max-width: 1300px;
    margin: 0 auto;
    margin-bottom: 3.5rem;

    p {
      font-size: 1.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 85%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    max-width: 1300px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const Container = styled.div`
  margin-top: 2rem;

  @media (min-width: 600px) {
    margin-top: 1rem;
    grid-column: ${({ gridCol }) => (gridCol === 'addLocation' ? '1/2' : '2/3')};
  }
`

export const Button = styled.button`
  width: 126px;
  margin: auto auto 0 auto;
  border: none;
  border-radius: 16px;
  display: inline-block;
  background-color: rgba(235, 87, 87, 0.9);
  color: #f2f2f2;
  padding: 1.2rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;

  i {
    margin-right: 1rem;
  }

  @media (min-width: 600px) {
    margin: 0;
    align-self: flex-start;
    grid-row-start: 1;
  }
`
