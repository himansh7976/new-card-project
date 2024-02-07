import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards/Cards'
import Nav from './Components/Nav/Nav'
import data from './Components/utils/data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav data={data} />
      <Cards data={data} />


    </>
  )
}

export default App
