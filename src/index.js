import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import './app.css'
import Favorite from './components/fav'
import {BrowserRouter,Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
 <h1> Movie World </h1>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/:id" element={<MovieDetails />} />
    <Route path="/fav" element={<Favorite/>}/>
  </Routes>
  </BrowserRouter>
  </>

);


