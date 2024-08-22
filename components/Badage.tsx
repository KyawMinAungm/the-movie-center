import React from 'react'

const Badage = ({text}: {text : string}) => {
  return (
    <div className='w-fit px-2 rounded bg-gray-500/50'>
        <p className="text-gray-300 text-sm my-1">{text.charAt(0).toUpperCase()+text.slice(1)}</p>
    </div>
  )
}

export default Badage