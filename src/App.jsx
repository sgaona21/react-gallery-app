import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Navigate } from "react-router-dom";

import PhotoList from './components/PhotoList.jsx'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'

import apiKey from './config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Search />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/cats' />} />
          <Route path='/cats' element={<PhotoList />} />
          <Route path='/dogs' element={<PhotoList />} />
          <Route path='/computers' element={<PhotoList />} />
          <Route path='/search/:query' element={<PhotoList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
