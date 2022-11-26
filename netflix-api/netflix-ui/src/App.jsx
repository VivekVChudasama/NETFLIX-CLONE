import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserLikedMovies';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/player" element={<Player/>} />
        <Route exact path="/movies" element={<Movies/>} />
        <Route exact path="/tv" element={<TVShows/>} />
        <Route exact path="/mylist" element={<UserListedMovies/>} />
        <Route exact path="/" element={<Netflix/>} />
     </Routes>
    </Router>
  )
}

