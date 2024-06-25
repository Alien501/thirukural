import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarTop from './components/NavbarTop/NavbarTop'
import RandomKuralCard from './components/RandomKuralCard/RandomKuralCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarTop />
      <RandomKuralCard />
    </>
  )
}

export default App
