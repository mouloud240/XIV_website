'use client'
import React from 'react'
import products from '@/constants/collection'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


const Week = () => {
  let slide = (counter) => {
    return products[Math.abs(counter % products.length)]
    }
    
    const[counter, setCounter] = useState(0);
    let handleClickup= () => {
      setCounter(counter + 1);
    } 
    let handleClickdown=() => {
      setCounter(counter - 1);
    }
  
  
  return (
    <main className=' px-10 py- flex flex-col gap-5 font-Beatrice-Deck-Trial tracking-relaxed leading-12'>
    <section className='flex justify-between items-end'>
    <div className='flex items-center gap-0'>
    <h1 className='font-Beatrice-Deck-Trial font-extrabold text-6xl tracking-relaxed leading-12  text-start '>NEW <br/>THIS WEEK</h1>
    <span className=' font-Beatrice-Deck-Trial font-extrabold text-6xl tracking-relaxed leading-12 text-blue-1000'>({products.length})</span>
    </div>                   
   <Link href='/' className='text-gray-500 hover:text-gray-700'>See All</Link>
    </section>
    <section className='mt-3 flex justify-between'>
     <div className='flex flex-col'>
      <Image src={slide(counter).path} alt='item' width={260} height={300} className='border boder-2 border-gray-400'/>
      <p className='text-xs font-medium  text-gray-400  '>{slide(counter).name}<br/></p>
      <span className='flex  justify-between'>
      <p className='font-medium text-x w-1/2'>{slide(counter).Details}</p>
       <p>{slide(counter).price}$</p>
       </span>
     </div>
     <div className='flex flex-col'>
     <Image src={slide(counter+1).path} alt='item' width={260} height={300} className='border boder-2 border-gray-400'/>
      <p className='text-xs font-medium  text-gray-400 '>{slide(counter+1).name}<br/></p>
      <span className='flex justify-between'>
      <p className='font-medium text-x w-1/2'>{slide(counter+1).Details}</p>
       <p>{slide(counter+1).price}$</p>
       </span>
      </div>
     <div className='flex flex-col'>
     <Image src={slide(counter+2).path} alt='item' width={260} height={300} className='border boder-2 border-gray-400'/>
      <p className='text-xs font-medium text-gray-400  '>{slide(counter+2).name}<br/></p>
      <span className='flex  justify-between'>
      <p className='font-medium text-x w-1/2'>{slide(counter+2).Details}</p>
       <p>{slide(counter+2).price}$</p>
       </span>
    </div>
     <div className='flex flex-col'>
     <Image src={slide(counter+3).path} alt='item' width={260} height={300} className='border boder-2 border-gray-400'/>
      <p className='text-xs font-medium text-gray-400  '>{slide(counter+3).name}<br/></p>
      <span className='flex  justify-between'>
      <p className='font-medium text-x w-1/2 '>{slide(counter+3).Details}</p>
       <p>{slide(counter+3).price}$</p>
       </span>
    </div>
    </section>
<section className='flex gap-5 justify-center'>
  <button className='border-gray-1000 border-2 px-6 py-3  text-gray-1000 hover:text-black hover:border-black' onClick={handleClickdown} > &#60;  </button>
      <button className='border-gray-1000 border-2 px-6 py-3 text-gray-1000 hover:text-black hover:border-black' onClick={handleClickup}> &#62;  </button>
      </section>
    </main>
  )
}

export default Week;