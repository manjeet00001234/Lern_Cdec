import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formgroup from './component/Formgroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formgroup />
    </>
  )
}

export default App
