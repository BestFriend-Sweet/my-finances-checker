import './App.css'
import Header from './components/Header'
import Fundamentals from './pages/Fundamentals'
import Calculator from './pages/Calculator'
import Welcome from './pages/Welcome'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('Welcome')

  function changePage() {
    setPage('Main')
  }

  return (
    page === 'Welcome' ?
      <Welcome
        onClick={changePage}
      /> :
      <>
        <Header />

        <Routes>
          <Route path='/fundamentals' element={<Fundamentals />} />
          <Route path='/calculator' element={<Calculator />}  />
        </Routes>
      </>
  )
}

export default App
