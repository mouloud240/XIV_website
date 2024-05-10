'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import outfits from '@/constants/outfits'
import { useState } from 'react'

const Hero = () => {
  let saison = 'Summer 2024'

  
 
  let slide = (counter

  ) => {
  
      return outfits[Math.abs(counter % outfits.length)]
    
  }

  const  [counter, setCounter] = useState(1);
  
  let handleClickup= () => {
    setCounter(counter + 1);
  }
  

   
  let handleClickdown=() => {
    setCounter(counter - 1);
  
}
 
  
 
  return (
    <div className=' px-40 py-40 flex justify-between '>
     <section className=''>
      <section className='mb-[190px]'>
      <h1 className='font-Beatrice-Deck-Trial font-extrabold text-6xl tracking-relaxed leading-12 text-center w-[283px] '>THE NEW COLLECTION</h1>
      <h2 className='font-Beatrice-Deck-Trial w-[87px]'>{saison}</h2>
      </section>
      <div className='flex gap-4'>
      <Link href='/'  className='flex justify-between items-center bg-gray-1000 px-4 py-[20px] w-[265px] h-[40px] '>
      <p className='font-Beatrice-Deck-Trial font-medium leading-2'>Go To Shop </p>
      <p className='text-4xl text-center pb-1'>&rarr;</p>
      </Link>
      <button className='border-gray-1000 border-2 h-[40] px-4 text-gray-1000 hover:text-black hover:border-black' onClick={handleClickdown}> &#60;  </button>
      <button className='border-gray-1000 border-2 h-[40] px-4 text-gray-1000 hover:text-black hover:border-black' onClick={handleClickup}> &#62;  </button>
      </div>
      </section>
      <aside className='flex  justify-center gap-5 w-1/2'>
            <Image src={slide(counter)} alt='outfit' width={366} height={376} />
            <Image src={slide(counter+1)} alt='outfit' width={366} height={376} />
          </aside>
      
       
        
   
      </div>
  )}

export default Hero;
