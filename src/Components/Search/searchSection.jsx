import React from 'react'
import Items from './constants'
import Link from 'next/link'
import Image from 'next/image'

const SearchSection = () => {
  return (
    <div className='mt-10 ml-10'>

        <ul className='flex flex-col gap-2'>
            {
                Items.map((item,index)=>(
                 <li key={index}>
                     <Link href={item.link}>
                     <p className='font-Beatrice-Deck-Trial text-2xl font-light '>
                        {item.name}
                     </p>
                     </Link>
                 </li>
                ))
            }
        </ul>
      <div className='mt-4'>
          <form action="get">
<div className='relative'>
    <Image className='absolute top-4 left-3'
    src={'Assets/searchIcon.svg'}
    height={25}
    width={25}
    alt='Search'
    />
              <input  placeholder='Search' className= 'rounded-md placeholder:text-gray-500 placeholder:text-lg focus:outline-none focus:text-lg outline-none focus:font-Beatrice-Deck-Trial focus:text-gray-500 bg-black bg-opacity-10 placeholder:font-Beatrice-Deck-Trial  shadow-md p-4 px-10 placeholder:translate-x-[80%] '  />
    
</div>        
             
          </form>
      </div>
    </div>
  )
}

export default SearchSection