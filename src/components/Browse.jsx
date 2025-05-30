// import React, { useEffect } from 'react'
import Header from './Header'
// import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../utils/movieSlice';

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/> 
      {
        <> 
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse
