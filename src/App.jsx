import { useState, useEffect } from 'react'
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
  const [images, setImages] = useState([]);

  const fetchData = () => {
    fetch('https://pixabay.com/api/?key=51152439-e0206553f27915b200ffedba7')
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
      console.log(data.hits);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className='container'>
        <Search />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/cats' />} />
          <Route path='/cats' element={<PhotoList data={images} />} />
          <Route path='/dogs' element={<PhotoList />} />
          <Route path='/computers' element={<PhotoList />} />
          <Route path='/search/:query' element={<PhotoList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
