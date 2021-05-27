import ReactDOM from 'react-dom'
import { StyledBackDrop, StyledModal } from './stylesModal'

const Modal = props => {
  const overlays = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<StyledBackDrop onClick={props.onShowModal} />, overlays)}
      {ReactDOM.createPortal(<StyledModal>{props.children}</StyledModal>, overlays)}
    </>
  )
}

export default Modal
