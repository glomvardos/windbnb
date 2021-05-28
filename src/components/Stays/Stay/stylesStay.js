import styled from 'styled-components'

export const StayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

export const ImgWrapper = styled.div`
  max-width: 100%;
`

export const RoomImg = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const RoomInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.8rem 0;
`

export const SuperHost = styled.p`
  margin-right: 1rem;
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  padding: 0.75rem 0.8rem 0.6rem 0.8rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2rem;

  @media (min-width: 530px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: -0.5rem;
  }
`

export const RoomDetails = styled.p`
  color: #828282;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 500;

  @media (min-width: 530px) {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`

export const RoomRating = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-left: auto;
  margin-right: 0.4rem;

  i {
    color: rgba(235, 87, 87, 0.72);
  }

  @media (min-width: 530px) {
    font-size: 1.4rem;
    line-height: 1.7rem;

    i {
      margin-right: 0.2rem;
    }
  }
`

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.7rem;

  @media (min-width: 530px) {
    font-size: 1.7rem;
    line-height: 2rem;
    margin-top: ${({ superHost }) => (superHost ? '-0.8rem' : '0')};
  }
`
