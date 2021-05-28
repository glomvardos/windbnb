import styled from 'styled-components'

export const Container = styled.div``

export const Persons = styled.div`
  margin-bottom: 5rem;

  h4,
  p {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  h4 {
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  p {
    color: #bdbdbd;
    font-weight: 400;
  }
`

export const BtnContainer = styled.div`
  width: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;

  button {
    font-size: 1.6rem;
    color: #828282;
    width: 23px;
    height: 23px;
    border: 1px solid #828282;
    border-radius: 4px;
  }

  span {
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    button {
      transition: all 200ms;
    }
    button:hover {
      border: 1px solid rgba(235, 87, 87, 0.9);
      background-color: rgba(235, 87, 87, 0.9);
      color: #fff;
    }
  }
`
