import { Movie } from '@/type'
import Image from 'next/image'
import React from 'react'
import Badage from './Badage'
interface Props {
    movie : Movie
}
const MovieCard = ({movie} :Props) => {
  const formatDate =  (dateString : string) : string => {
    const date = new Date(dateString);
    const day = date.getDate()
    const month = date.toLocaleDateString('default', {month : 'long'})

    return (`${day} ${month}`)
  }
  
  return (
    <div className='w-[309px] relative  rounded-[5px] overflow-hidden flex-shrink-0'>
      <div className="-z-10">
        <Image width={309} height={450} alt='' src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
      </div>
      <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black/50 to-transparent w-full">
        <h3 className='text-xl'>{movie.title}</h3>
        <p className="text-gray-300">{formatDate(movie.release_date)}</p>
        {movie.adult && <p className='text-gray-300'>18+</p>}
        <Badage text={movie.original_language}/>
      </div>
    </div>
  )
}

export default MovieCard