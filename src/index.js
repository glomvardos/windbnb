import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlobalStyles from './global-styles'
import { ContextProvider } from './context'

ReactDOM.render(
  <ContextProvider>
    <GlobalStyles />
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
