import React from 'react'
import { Play } from 'lucide-react'

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full aspect-video absolute inset-0 text-white px-6 md:px-24 flex flex-col justify-center bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="mt-4 md:mt-6 text-sm md:text-lg max-w-xl leading-relaxed drop-shadow-md">
        {overview}
      </p>
      <div className="flex gap-4 mt-6">
        <button className="flex items-center gap-2 bg-white text-black px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg rounded-lg hover:bg-gray-200 transition-all duration-200 shadow">
          <Play className="w-5 h-5" />
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg rounded-lg hover:bg-gray-600 transition-all duration-200 shadow">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
