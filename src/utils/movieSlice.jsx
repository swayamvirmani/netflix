import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name : 'movies',
  initialState : {nowPlayingMovies: null},
  reducers : {
    addNowPlayingMovies: (state,action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
    state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state,action)=>{
      state.topratedMovies = action.payload;
    }
  }

});
export default movieSlice.reducer
export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies} = movieSlice.actions;