"use client"
import React from 'react'
import Items from './constants'
import Link from 'next/link'
import Image from 'next/image'
import { UseGenerationStore } from '@/State'
import { AnimatePresence,motion } from 'framer-motion'
const drawerVariants={
  hidden:{
    opacity:0,
    x:"-100vh"
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:"spring"
    }
  },
  exit:{
    x:"100vh",
    opacity:0
  }
  
}
const SearchSection = () => {
  const {drawerToggled}=UseGenerationStore();
  return (
  <>
      <AnimatePresence mode='wait'>{
        drawerToggled&&(
          <motion.div variants={drawerVariants} initial="hidden" animate="visible" exit="exit" className='mt-10 ml-10'>

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
            <motion.div  className='mt-4'>
              <motion.form whileFocus={{scale:1.2 ,scaleX:1.5}} action="get">
                <div className='relative'>
                  <Image className='absolute top-4 left-3'
                    src={'Assets/searchIcon.svg'}
                    height={25}
                    width={25}
                    alt='Search'
                  />
                  <input   placeholder='Search' className= 'rounded-md placeholder:text-gray-500 placeholder:text-lg focus:outline-none focus:text-lg outline-none focus:font-Beatrice-Deck-Trial focus:text-gray-500 bg-black bg-opacity-10 placeholder:font-Beatrice-Deck-Trial  shadow-md p-4 px-10 placeholder:translate-x-[10%] '  />

                </div>        

              </motion.form>
            </motion.div>
          </motion.div>

        )
      }</AnimatePresence>
  </>
  )
}

export default SearchSection
