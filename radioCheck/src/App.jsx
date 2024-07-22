import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RadioCheckForm from './component/RadioCheckForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RadioCheckForm/>
    </div>
  )
}

export default App
