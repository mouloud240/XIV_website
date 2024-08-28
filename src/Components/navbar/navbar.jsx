
"use client"
import { UseGenerationStore } from "@/State"
import Navlinks from "@/constants/constants2.js"
import Link from "next/link"
import { animate, easeIn, motion } from "framer-motion"
import Image from "next/image"
const navbarVariants={
  hidden:{
    opacity:0,
    y:-200
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      type:"spring",
      easeing:easeIn
    }
  }
}
const logoVariants={
  visible:{
    rotate:360,
    transiton:{
      duration:0.2,
      delay:3,
    }
  }
}
const Navbar = () => {
const {drawerToggled,setDrawerToggled}=UseGenerationStore();
const handledrawer = () => {
    if (drawerToggled !== undefined) {
      setDrawerToggled(!drawerToggled);
    } 
  }
  return (
    <motion.div variants={navbarVariants} initial="hidden" animate="visible">
        <div className="flex justify-around lg:hidden">
            <div>
            <motion.button onClick={handledrawer} >
                <motion.img whileTap={{scale:0.85}}
                src={'Assets/drawer.svg'}
                width={35}
                height={45}
                alt="Drawer"
                />
            </motion.button>
            </div>
        <Link href={'/'}>
                    <img
                    src={'Assets/Logo.svg'}
                    width={45}
                    height={45}
                    alt='logo'
                    />
                    </Link>
        </div>
        <div className="mt-4 mx-10 hidden lg:flex lg:flex-col ">
            <div className="flex justify-between items-center">
                <ul className="flex gap-6 items-center">
                    <button onClick={handledrawer}>
                        <img
                        src={'Assets/drawer.svg'}
                        width={35}
                        height={45}
                        alt="Drawer"
                        />
                    </button>
                    {
                        Navlinks.map((item,index)=>(
                            <li key={index}>
                               <Link href={item.path}>
                                <p className="font-Beatrice-Deck-Trial font-medium hover:scale-110 duration-400 ">
                                {item.name}
                                </p>
                              
                               </Link>
                            </li>
        
                        ))
                    }
                     
                </ul>
                <motion.div variants={logoVariants} transition={{type:"spring", delay:0.3}} animate="visible">
                    <Link href={'/'}>
                    <img
                    src={'Assets/Logo.svg'}
                    width={45}
                    height={45}
                    alt='logo'
                    />
                    </Link>
            
                </motion.div>
                <div className="flex gap-10 ">
                  
                    <motion.div whileTap={{scale:0.85}} className=" rounded-full bg-black flex justify-center  px-6 items-center cursor-pointer   ">
                        <motion.img 
                        src={'Assets/heart.svg'}
                        width={25}
                        height={25}
                        alt="Heart"
                        />
                         
                    </motion.div>
                    <div className="flex gap-10">
                  
                        <motion.button whileTap={{scale:0.75}} className="  bg-black rounded-full flex items-center justify-center  py-1 px-10 hover:bg-blue-800 duration-500  bg-opacity-80 cursor-pointer">
                        
                              <p className="text-white font-medium">
                                Cart
                              </p>
                            
                        </motion.button>
                        <motion.div whileTap={{scale:0.85}}  className="border-8 border-black rounded-full border-opacity-80 cursor-pointer ">
                        <motion.img                                src={'Assets/bag.svg'}
                              height={45}
                              width={60}
                              alt="Bag"
                              />
                        </motion.div>
                    
                    </div>
                   
                    <motion.div whileTap={{scale:0.85}} className="bg-black bg-opacity-80 rounded-full items-center flex  hover:bg-blue-900 duration-500  justify-center px-7 cursor-pointer"> 
                        <Image
                        src={'Assets/profile.svg'}
                        height={25}
                        width={25}
                        alt="Profile"
                        />
                    </motion.div>
                </div>
        
            </div>
        </div>
    </motion.div>
  )
}
export default Navbar
