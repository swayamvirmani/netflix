import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import {useSelector} from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topratedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming movies"} movies={movies.nowPlayingMovies}/> 

      <MovieCard/>
      </div>
    </div>
  ))
}

export default SecondaryContainer
