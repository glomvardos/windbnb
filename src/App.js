import { useContext } from 'react'
import Header from './components/Header/Header'
import Stays from './components/Stays/Stays'
import Footer from './components/Footer/Footer'
import SearchForm from './components/SearchForm/SearchForm'
import { context } from './context'

const App = () => {
  const { showModal, showModalHandler } = useContext(context)
  return (
    <>
      {showModal && <SearchForm onShowModal={showModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <Stays />
      <Footer />
    </>
  )
}

export default App
