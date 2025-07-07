import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Navigate } from "react-router-dom";

import PhotoList from './components/PhotoList.jsx'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import NotFound from './components/NotFound.jsx'

import { useParams } from 'react-router-dom';

import apiKey from './config'

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [fetching, setFetching] = useState(false)

  const fetchData = (key, searchQuery) => {
    setFetching(true);
    fetch(`https://pixabay.com/api/?key=${key}&q=${searchQuery}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
    })
    .finally(() => setFetching(false))
  }

  useEffect(() => {
    fetchData(apiKey, query);
  }, [query])

  return (
    <>
      <div className='container'>
        <Search updateQuery={setQuery} currentQuery={query} />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/cats' />} />
          <Route path='/cats' element={<PhotoList data={images} updateQuery={setQuery} category={'cats'} isFetching={fetching} />} />
          <Route path='/dogs' element={<PhotoList data={images} updateQuery={setQuery} category={'dogs'} isFetching={fetching} />} />
          <Route path='/computers' element={<PhotoList data={images} updateQuery={setQuery} category={'computers'} isFetching={fetching} />} />
          <Route path='/search/:query' element={<PhotoList data={images} updateQuery={setQuery} isFetching={fetching} />}  />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
