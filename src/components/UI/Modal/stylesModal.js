import styled from 'styled-components'

export const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`
export const StyledModal = styled.div`
  font-family: 'Mulish', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #ffffff;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  @media (min-width: 600px) {
    height: 45vh;
    padding: 3rem 3rem 3rem 3rem;
  }
`
