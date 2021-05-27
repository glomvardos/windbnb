import { Container, Label, StyledInput } from './stylesInput'

const Input = props => {
  return (
    <Container gridArea={props.area}>
      <Label htmlFor={props.id}>{props.id}</Label>
      <StyledInput
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        onFocus={props.onFocus}
      />
    </Container>
  )
}

export default Input
