import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

function VideoBackground({ movieId }) {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results?.filter(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      const trailer = filterData?.[0];
      if (trailer) {
        setTrailerId(trailer.key);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

  return (
    <div className=''>
      {trailerId ? (
        <iframe className='w-screen aspect-video '
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
}

export default VideoBackground;
