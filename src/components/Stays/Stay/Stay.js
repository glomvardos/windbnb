import {
  StayContainer,
  ImgWrapper,
  RoomImg,
  RoomInfoContainer,
  SuperHost,
  RoomDetails,
  RoomRating,
  SubTitle,
} from './stylesStay'

const Stay = props => {
  return (
    <StayContainer>
      <ImgWrapper>
        <RoomImg src={props.photo} />
      </ImgWrapper>
      <RoomInfoContainer>
        <SuperHost>{props.superHost}super host</SuperHost>
        <RoomDetails>
          {props.type} {props.beds}
        </RoomDetails>
        <RoomRating>{props.rating}</RoomRating>
      </RoomInfoContainer>
      <SubTitle>{props.title}</SubTitle>
    </StayContainer>
  )
}

export default Stay
