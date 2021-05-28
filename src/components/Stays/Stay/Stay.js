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
  const isSuperHost = props.superHost

  let availableBeds
  if (props.beds === 1) {
    availableBeds = 'bed'
  }
  if (props.beds > 1) {
    availableBeds = 'beds'
  }

  return (
    <StayContainer>
      <ImgWrapper>
        <RoomImg src={props.photo} />
      </ImgWrapper>
      <RoomInfoContainer>
        {isSuperHost && <SuperHost>{props.superHost}super host</SuperHost>}
        <RoomDetails>
          {props.type} {props.beds} {props.beds !== 0 ? availableBeds : ''}
        </RoomDetails>
        <RoomRating>
          <i className='fas fa-star fa-lg'></i> {props.rating.toFixed(2)}
        </RoomRating>
      </RoomInfoContainer>
      <SubTitle superHost={props.superHost}>{props.title}</SubTitle>
    </StayContainer>
  )
}

export default Stay
