import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, Navigate } from "react-router-dom";

import PhotoList from './components/PhotoList.jsx'
import Search from './components/Search.jsx'
import Nav from './components/Nav.jsx'
import NotFound from './components/NotFound.jsx'

import apiKey from './config'

function App() {
  const [images, setImages] = useState([]); // manages array of images 
  const [query, setQuery] = useState(''); // manages current search query 
  const [fetching, setFetching] = useState(false) // manages time between loading new images 

  const fetchData = (key, searchQuery) => {
    //fetches images from Pixabay API
    setFetching(true);
    fetch(`https://pixabay.com/api/?key=${key}&q=${searchQuery}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
    })
    .catch(error => console.error('Error fetching images:', error.message))
    .finally(() => setFetching(false))
  }

  useEffect(() => {
    //creates new fetch request upon state change
    fetchData(apiKey, query);
  }, [query])

  return (
    <>
      <div className='container'>
        <Search updateQuery={setQuery} currentQuery={query} />
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate replace to='/cats' />} />
          <Route path='/cats' element={<PhotoList data={images} updateQuery={setQuery} category={'cats'} isFetching={fetching} currentQuery={query} />} />
          <Route path='/dogs' element={<PhotoList data={images} updateQuery={setQuery} category={'dogs'} isFetching={fetching} currentQuery={query} />} />
          <Route path='/computers' element={<PhotoList data={images} updateQuery={setQuery} category={'computers'} isFetching={fetching} currentQuery={query} />} />
          <Route path='/search/:query' element={<PhotoList data={images} updateQuery={setQuery} isFetching={fetching} currentQuery={query} />}  />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
