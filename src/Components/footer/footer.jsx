"use client"
import Link from 'next/link'
import Info  from '@/constants/Constants.js';
import style from './footer.module.css'
import { delay, easeIn, motion } from 'framer-motion';
import Image from 'next/image';
const footerVariants={
  hidden:{
    y:200, 
    opacity:0
  },
  visible:{
    y:0,
    
    opacity:1,
    transition:{
      delay:0.2,
      type:"spring",
      stiffness:120,
      ease:easeIn
    }
  }
}
const footerItemsVariants={
  hidden:{
    opacity:0,
    x:"-100vh"
  },
  visible:(index)=>({
    x:0,
    opacity:1,
    transition:{
      delay:0.25*index,
      type:"spring",
      stiffness:80,
      ease:easeIn
    }
  })
}
const rightSectionVariants={
  hidden:{
    x:"100vh",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      type:"spring",
      ease:easeIn,
      delay:0.2,
    }
  }
}
const Footer = () => {
  return (
    <motion.div variants={footerVariants} initial="hidden" whileInView="visible" viewport={{once:true}} className={`mb-2 flex justify-around items-center bg-footerbg ${style.footer} h-96`}>
      <ul>
        
      {
        Info.map((item,index) => (
            <motion.li variants={footerItemsVariants} viewport={{once:true}} custom={index} key={index}>          <Link href={item.path} key={item.path}>
              

              <p className='font-Beatrice-Deck-Trial hover:text-black hover:scale-120 duration-300 text-gray-800/50 my-3'>
                {item.name}
              </p>
            </Link>
            </motion.li>        ))
        
}
                           
      
      </ul>
      <motion.div variants={rightSectionVariants}  className='flex flex-col justify-start'>
      <p className='font-Beatrice-Deck-Trial text-gray-700/25 my-3'>Technologies</p>
      <form>
      <motion.img whileInView={{rotate:-360, transition:{delay:0.5,type:"spring", duration:2}}} viewport={{once:true}}   src="/Assets/Logo.svg" alt="footer" width={47} height={47} className='absolute mr-[69px]' />
      <Image src="/Assets/vr.svg" alt="vr" width={116} height={58}  />
      </form>
      <Image src="/Assets/xiv.svg" alt="footer" width={345} height={58} className='mt-1' />
      <Image src="/Assets/qr.svg" alt="footer" width={116} height={58} className='mt-1' />
      </motion.div>
    </motion.div>
    
  )
}

export default Footer
