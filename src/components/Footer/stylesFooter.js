import styled from 'styled-components'

export const Copyright = styled.footer`
  padding: 1.5rem;
  color: #828282;
  font-size: 1.5rem;
  line-height: 1.7rem;
  text-align: center;
  margin-top: 5rem;

  p {
    font-weight: 500;
  }

  span {
    font-weight: 700;
    text-decoration: underline;
  }

  @media (min-width: 530px) {
    padding: 3rem;
    margin-top: 10rem;
  }
`
