import React from 'react'
import { Movie as MovieType } from '@/type'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import MovieCard from './MovieCard'
interface Props {
    movies : MovieType[],
    title : string,
}
const MovieList = ({movies , title } : Props) => {
    const list = movies.slice(2,10)
    const path = title.toLowerCase().replace(/ /g,'-').replace(/^a-z0-9-/g,'')
  return (
    
    <div className='w-full p-10 '>
        <div className="w-full flex justify-between items-center my-10">
            <h4 className='text-xl font-bold'>{title}</h4>
            <Link className='flex items-center justify-center text-sm gap-2 text-gray-500' href={`/${path}`}>
                <p>see more</p>
                <FaArrowRightLong/>
            </Link>
        </div>
        <div className="w-full overflow-hidden flex gap-10 flex-row items-center  ">
            {list.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

        </div>
    </div>
  )
}

export default MovieList