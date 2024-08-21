import { Movie } from '@/type'
import Image from 'next/image'
import React from 'react'
interface Props {
    movie : Movie
}
const MovieCard = ({movie} :Props) => {
  
  return (
    <div className='w-[309px] relative  rounded-[5px] overflow-hidden flex-shrink-0'>
      <div className="">
        <Image width={309} height={450} alt='' src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
      </div>
      
    </div>
  )
}

export default MovieCard