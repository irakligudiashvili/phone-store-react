import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/partials/header/Header'
import Homepage from './components/homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Homepage />
    </>
  )
}

export default App
