import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PhotoList from './components/PhotoList.jsx'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'

import apiKey from './config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
      <Nav />
      <div className='container'>
        <PhotoList />
      </div>
    </>
  )
}

export default App
