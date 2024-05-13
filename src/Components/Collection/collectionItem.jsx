import Image from 'next/image'
import React from 'react'

const CollectionItem = ({name,category,image,price,color}) => {
  return (
    <div>
        <div className='relative'>
          
           
            <Image
            src={image}
            width={390}
            height={360}
            alt={name}
            />
        <div className='absolute translate-y-[-100%] translate-x-[330%]'>
        <Image
            src={'Assets/Addbutton.svg'}
            width={45}
            height={45}
            alt='add'
            />
        </div>
        </div>
        <div className='mt-3'>
            <div className='flex items-center gap-2'>
                <div className='text-gray-500 font-medium font-Beatrice-Deck-Trial text-lg '>
                 {category}
                </div  >
                <div className={`bg-${color} w-3 h-3 ring-1 ring-gray-400  shadow-2xl`}>
                  
                </div>
                
            </div>
            <div className='flex justify-between w-[23vw] ' >
                <div className='text-black font-semibold font-Beatrice-Deck-Trial text-lg'>
                {name}
               </div>
               <div className='text-lg font-Beatrice-Deck-Trial text-black font-semibold'>
                {price}
               </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default CollectionItem;