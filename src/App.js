import React, { Component, useState, useEffect } from 'react';
import './index.css';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';

export default () => {
  const [movies, setMovies] = useState([])
  const [sortMethod, setSortMethod] = useState(sessionStorage.getItem('SortMethod'))

  //Första starten
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('SavedMovies'))
    if(savedMovies){
      setMovies(savedMovies)
    }
  },[])

  //När movies uppdateras
  useEffect(() => {
    localStorage.setItem('SavedMovies', JSON.stringify(movies))
  },[movies])

  //När sorteringsmetod uppdateras
  useEffect(() => {
    sessionStorage.setItem('SortMethod', sortMethod)
  },[sortMethod])

  function addMovie(movie) {
    console.log('adding', movie)
    const newMovies = [...movies, {...movie, id: Date.now()}]
    setMovies(newMovies)
  }

  function deleteMovie(movie) {

    setMovies(movies.filter(e => e.id !== movie.id))
  }

  return(
    <div className = "App" >
      <header className="App-header">
        <h1 >React-Movie-list</h1>
      </header>
      <body>
        <AddMovieForm 
          addMovie={addMovie} />
        <MovieList 
          movies={movies} 
          sortMethod={sortMethod} 
          deleteMovie={deleteMovie}
          setSortMethod={setSortMethod} />
      </body>
      
    </div>
  );
}
