import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Navigate } from "react-router-dom";

import PhotoList from './components/PhotoList.jsx'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import { useParams } from 'react-router-dom';

import apiKey from './config'

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = (key, searchQuery) => {
    fetch(`https://pixabay.com/api/?key=${key}&q=${searchQuery}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
    })
  }

  useEffect(() => {
    fetchData(apiKey, query);
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
          <Route path='/computers' element={<PhotoList data={images} updateQuery={setQuery} category={'computers'} />} />
          <Route path='/search/:query' element={<PhotoList data={images} updateQuery={setQuery} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
