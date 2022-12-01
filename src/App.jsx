import './App.css'
import Header from './components/Header'
import Fundamentals from './pages/Fundamentals'
import Calculator from './pages/Calculator'
import Welcome from './pages/Welcome'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { LanguageProvider } from './components/LanguageProvider'

function App() {
  const [page, setPage] = useState('Welcome')

  function changePage() {
    setPage('Main')
  }

  return (
    <LanguageProvider>
      {page === 'Welcome' ?
        <Welcome
          onClick={changePage}
        /> :
        <>
          <Header />

          <Routes>
            <Route path='/' element={<Fundamentals />} />
            <Route path='/fundamentals' element={<Fundamentals />} />
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
        </>}
    </LanguageProvider>
  )
}

export default App
