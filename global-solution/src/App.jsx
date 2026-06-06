import { useState } from 'react'
import Home from './Home'
import Previsoes from './Previsoes'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'previsoes') {
    return <Previsoes onNavigate={setCurrentPage} currentPage={currentPage} />
  }

  return <Home onNavigate={setCurrentPage} currentPage={currentPage} />
}

export default App
