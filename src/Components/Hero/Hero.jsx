'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import outfits from '@/constants/outfits'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react'

import { motion } from 'framer-motion'





const Hero = () => {
let saison = 'Summer 2024'

let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 2,
    speed: 1000,
    focusOnSelect: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

 const heroVariants={
    hidden:{
      opacity:0,
      x:"-100vh"
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        duration:1,
        stiffness:120

      }
    }
  }
  return (
    <motion.div variants={heroVariants} initial="hidden" animate="visible" className=" px-10 py-20 flex justify-between font-Beatrice-Deck-Trial ">
      <section className="">
        <section className="mb-72">
          <h1 className=" font-extrabold text-6xl tracking-relaxed leading-12 text-center w-72 ">
            THE NEW <br/> COLLECTION
          </h1>
          <h2 className=" w-10">{saison}</h2>
        </section>
        <div className="flex gap-4">
          <Link
            href="/"
            className="flex justify-between items-center bg-gray-1000 px-5 py-5 w-72 h-10 "
          >
            <p className="font-Beatrice-Deck-Trial font-medium leading-2">
              Go To Shop{" "}
            </p>
            <p className="text-4xl text-center pb-1">&rarr;</p>
          </Link>
          <motion.button whileTap={{scale:0.85}}
            className="border-gray-1000 border-2 h-[40] px-4 text-gray-1000 hover:text-black hover:border-black"
            onClick={previous}
          >
            {" "}
            &#60;{" "}
          </motion.button>
          <motion.button  whileTap={{scale:0.85}}
            className="border-gray-1000 border-2 h-[40] px-4 text-gray-1000 hover:text-black hover:border-black"
            onClick={next}
          >
            {" "}
            &#62;{" "}
          </motion.button>
        </div>
      </section>
     <section className='w-1/2'>
      <ul>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {
           
       outfits.map((item,index) =>
       <li key={index} className='p-2'>
              <Image
                src={item}
                alt="outfit"
                width={400}
                height={420}
                className="border boder-2 border-gray-400 "
              />
            </li>
         ) }
        </Slider>
      </ul>
      </section>
    </motion.div>
  );}

export default Hero;
