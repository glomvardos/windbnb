import { useState, useEffect, createContext } from 'react'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [stays, setStays] = useState([])
  const [filteredStays, setFilteredStays] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [locationBarText, setLocationBarText] = useState('')
  const [guestsBarText, setGuestsBarText] = useState('')

  const fetchStays = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://windbnd-default-rtdb.europe-west1.firebasedatabase.app/stays.json'
      )

      if (response.ok) {
        setIsLoading(false)
      }

      if (!response.ok) {
        throw new Error('Failed to load stays! Please try again.')
      }

      const data = await response.json()

      const trasformedData = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }))

      setStays(trasformedData)
      setFilteredStays(trasformedData)
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchStays()
  }, [])

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const onSearchHandler = data => {
    setLocationBarText(data['city'])
    setGuestsBarText(data['maxGuests'])
    const city = data['city'].split(' ')[0]
    const receivedData = {
      city: city.slice(0, city.length - 1),
      maxGuests: data['maxGuests'],
    }

    const filteredSearch = stays.filter(
      stay => stay.city === receivedData.city && stay.maxGuests >= receivedData.maxGuests
    )

    setFilteredStays(filteredSearch)
  }

  return (
    <context.Provider
      value={{
        filteredStays,
        showModal,
        showModalHandler,
        onSearchHandler,
        locationBarText,
        guestsBarText,
        isLoading,
        error,
      }}
    >
      {children}
    </context.Provider>
  )
}

export { context, ContextProvider }
