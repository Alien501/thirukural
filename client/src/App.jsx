import { useState } from 'react'
import './App.css'
import NavbarTop from './components/NavbarTop/NavbarTop'
import Footer from './components/Footer/Footer'

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import AdhigaramPage from './pages/AdhigaramPage/AdhigaramPage'
import KuralPage from './pages/KuralPage/KuralPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarTop />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<AboutPage />} path='/about' />
        <Route element={<AdhigaramPage />} path='/adhigaram' />
        <Route element={<KuralPage />} path='/kural/:r' />
      </Routes>
      <Footer />
    </>
  )
}

export default App
