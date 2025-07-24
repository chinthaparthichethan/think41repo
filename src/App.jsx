import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Date1  from './components/Date1.jsx'
import alert1 from './components/alert1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Date1/>
     <alert1/>

    </>
  )
}

export default App
