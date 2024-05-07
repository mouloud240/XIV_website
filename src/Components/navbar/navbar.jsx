import Navlinks from "@/constants/constants2.js"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="mt-4 mx-10 ">
        <div className="flex justify-between items-center">
            <ul className="flex gap-6 items-center">
                <button>
                    
                    <Image
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
            <div>
                <Link href={'/'}>
                <Image
                src={'Assets/Logo.svg'}
                width={45}
                height={45}
                
                />
                </Link>
        
            </div>
            <div className="flex gap-10 ">
              
                <div className=" rounded-full bg-black flex justify-center  px-6 items-center cursor-pointer   ">
                    <Image
                    src={'Assets/heart.svg'}
                    width={25}
                    height={25}
                    alt="Heart"
                    />
                     
                </div>
                <div className="flex ">
              
                    <div className=" bg-black rounded-full flex items-center justify-center  py-1 px-10 hover:bg-blue-800 duration-500  bg-opacity-80 cursor-pointer">
                    
                          <p className="text-white font-medium">
                            Cart
                          </p>
                        
                    </div>
                    <div className="border-8 border-black rounded-full border-opacity-80 cursor-pointer ">
                    <Image
                          src={'Assets/bag.svg'}
                          height={45}
                          width={60}
                          alt="Bag"
                          />
                    </div>
                
                </div>
               
                <div className="bg-black bg-opacity-80 rounded-full items-center flex  hover:bg-blue-900 duration-500  justify-center px-7 cursor-pointer">
                    <Image
                    src={'Assets/profile.svg'}
                    height={25}
                    width={25}
                    alt="Profile"
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar