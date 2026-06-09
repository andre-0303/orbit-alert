import { useState } from 'react'
import Home from './Home'
import Previsoes from './Previsoes'
import MapaRisco from './MapaRisco'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'previsoes') {
    return <Previsoes onNavigate={setCurrentPage} currentPage={currentPage} />
  }

  if (currentPage === 'mapa-risco') {
    return (
      <MapaRisco
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
    )
  }

  return <Home onNavigate={setCurrentPage} currentPage={currentPage} />
}

export default App
