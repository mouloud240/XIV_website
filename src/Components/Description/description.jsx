"use client"
import Image from "next/image"
import Images from "./constants"
import { delay, easeIn, easeOut, motion } from "framer-motion"
const textVariants={
  hidden:{
    opacity:0,
    y:40,
    scale:0.8
  },
  visible:{
    scale:1.05,
    opacity:1,
    y:0,
    transition:{
      delay:0.3,
      ease:easeIn

    }
  }
}
const imagesVariants={
  hidden:(index)=>(
    {
      y:index%2==0?-150:150,
      opacity:0,
    }

  ),
  
  visible:(index)=>(
    {
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        ease:easeOut,
        delay:0.3*index
      }
    })
  }

const Description = () => {
  return (
    <section className="mt-8">
      <motion.div variants={textVariants} initial='hidden' whileInView="visible" viewport={{once:true,amount:0.1}}>
        <h1 className="font-Beatrice-Deck-Trial font-medium text-4xl tracking-widest leading-10 text-center w-full">
          Our Approach to fashion design
        </h1>
        <div className="flex justify-center">
          <h3 className="font-Beatrice-Deck-Trial font-normal text-lg text-gray-600 text-center ">
            at elegant vogue , we blend creativity with craftsmanship to create
            <br />
            fashion that transcends trends and stands the test of time each
            <br /> design is meticulously crafted, ensuring the highest quality
            <br /> exqulsite finish
          </h3>
        </div>
      </motion.div>
      <ul className="flex justify-center mt-4 ml-20  gap-24">
        {Images.map((item, index) => (
          <motion.li variants={imagesVariants} initial="hidden" whileInView="visible" custom={index} viewport={{once:true}}  key={index} className="w-[340px] h-[420px] overflow-clip">
          
            <Image
              src={item.image}
              alt={item.alt}
              key={item.src}
              className={`${item.margin} outline-none`}
              height={item.height}
              width={item.width}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Description
