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
  const [query, setQuery] = useState('cats');

  const fetchData = (searchQuery) => {
    fetch(`https://pixabay.com/api/?key=51152439-e0206553f27915b200ffedba7&q=${searchQuery}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
      console.log(data.hits);
    })
  }

  useEffect(() => {
    fetchData(query);
  }, [query])

  return (
    <>
      <div className='container'>
        <Search updateQuery={setQuery} />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/cats' />} />
          <Route path='/cats' element={<PhotoList data={images} updateQuery={setQuery} category={'cats'} />} />
          <Route path='/dogs' element={<PhotoList data={images} updateQuery={setQuery} category={'dogs'} />} />
          <Route path='/computers' element={<PhotoList data={images} updateQuery={setQuery} category={'computers'}/>} />
          <Route path='/search/:query' element={<PhotoList data={images} updateQuery={setQuery} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
