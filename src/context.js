import { useState, useEffect, createContext } from 'react'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [stays, setStays] = useState([])

  const fetchStays = async () => {
    const response = await fetch(
      'https://windbnd-default-rtdb.europe-west1.firebasedatabase.app/stays.json'
    )
    const data = await response.json()
    const trasformedData = Object.keys(data).map(key => ({
      ...data[key],
      id: key,
    }))

    setStays(trasformedData)
  }

  useEffect(() => {
    fetchStays()
  }, [])

  return <context.Provider value={{ stays }}>{children}</context.Provider>
}

export { context, ContextProvider }
