import React from 'react'
import { img_cdn } from '../utils/constants'
// img_cdn
function MovieCard({posterPath}) {
  return (
    <div className='w-48 pr-4'>
      <img src={img_cdn+posterPath} alt="movie Name" />
    </div>
  )
}

export default MovieCard
