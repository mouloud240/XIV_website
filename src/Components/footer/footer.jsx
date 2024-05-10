import React from 'react'
import  Image from 'next/image'
import Link from 'next/link'
import Info  from '@/constants/Constants.js';
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={`flex justify-around items-center bg-footerbg ${style.footer} h-96`}>
      <div >
        
      {
        Info.map((item) => (
          <Link href={item.path} key={item.path}>
            <p className='font-Beatrice-Deck-Trial text-gray-800/50 my-3'>
              {item.name}
            </p>
          </Link>
        ))
        
}
                           
      
      </div>
      <div className='flex flex-col justify-start'>
      <p className='font-Beatrice-Deck-Trial text-gray-700/25 my-3'>Technologies</p>
      <form>
      <Image src="/Assets/Logo.svg" alt="footer" width={47} height={47} className='absolute mr-[69px]' />
      <Image src="/Assets/vr.svg" alt="vr" width={116} height={58}  />
      </form>
      <Image src="/Assets/xiv.svg" alt="footer" width={345} height={58} className='mt-1' />
      <Image src="/Assets/qr.svg" alt="footer" width={116} height={58} className='mt-1' />
      </div>
    </div>
  )
}

export default Footer