import { useContext } from 'react'
import { context } from '../../../context'
import { ErrorMessage } from './stylesError'

const Error = () => {
  const { error } = useContext(context)
  return <ErrorMessage>{error}</ErrorMessage>
}

export default Error
